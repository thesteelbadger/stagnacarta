@echo off
REM Deploy Stagnacarta to webroot
REM Builds the site and copies static output to the webroot
REM
REM Usage: scripts\deploy.bat
REM    or: npm run deploy

echo Building site...
call npm run build
if errorlevel 1 (
    echo Build failed.
    exit /b 1
)

echo.
echo Deploying to webroot...
robocopy dist \\docker\Stagnacarta-public /MIR /NJH /NJS /NDL /NFL /R:3 /W:5

if errorlevel 8 (
    echo Deploy failed.
    exit /b 1
)

echo.
echo Deployed successfully.
