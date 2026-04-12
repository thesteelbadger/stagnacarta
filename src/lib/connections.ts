import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

interface Relationship {
  from: string;
  to: string;
  type: string;
}

interface RelationshipsData {
  relationships: Relationship[];
}

let _cache: Relationship[] | null = null;

function loadRelationships(): Relationship[] {
  if (_cache) return _cache;
  const filePath = path.resolve('./src/data/relationships.yaml');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = parse(raw) as RelationshipsData;
  _cache = data.relationships;
  return _cache;
}

/**
 * Get all items connected TO a given node (where node is in the 'from' field).
 * e.g. getLinksFrom('case-studies/send-crisis') returns mechanisms and organs it connects to.
 */
export function getLinksFrom(nodeId: string): Relationship[] {
  return loadRelationships().filter(r => r.from === nodeId);
}

/**
 * Get all items connected FROM other nodes to this one (where node is in the 'to' field).
 * e.g. getLinksTo('mechanisms/metric-capture') returns case studies and organs that reference it.
 */
export function getLinksTo(nodeId: string): Relationship[] {
  return loadRelationships().filter(r => r.to === nodeId);
}

/**
 * Get all connections involving a node (either direction).
 */
export function getLinks(nodeId: string): Relationship[] {
  return loadRelationships().filter(r => r.from === nodeId || r.to === nodeId);
}

/**
 * Get connected node IDs of a specific collection type for a given node.
 * Looks in both directions.
 * e.g. getConnectedIds('case-studies/send-crisis', 'mechanisms') returns ['metric-capture', 'accountability-diffusion']
 */
export function getConnectedIds(nodeId: string, targetCollection: string): string[] {
  const all = getLinks(nodeId);
  const ids = new Set<string>();

  for (const r of all) {
    if (r.from === nodeId && r.to.startsWith(targetCollection + '/')) {
      ids.add(r.to.split('/')[1]);
    }
    if (r.to === nodeId && r.from.startsWith(targetCollection + '/')) {
      ids.add(r.from.split('/')[1]);
    }
  }

  return Array.from(ids);
}

/**
 * Get all relationships (for the connections visualisation).
 */
export function getAllRelationships(): Relationship[] {
  return loadRelationships();
}
