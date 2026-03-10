@echo off
echo ============================================
echo   Pushing Vijaya Dental Clinic to GitHub
echo ============================================
echo.

cd /d "%~dp0"

echo [1/5] Checking Git initialization...
if not exist ".git" (
    echo Git not initialized. Initializing...
    git init
    git branch -M main
    git remote add origin https://github.com/CHANDU-JANIPIREDDY/vijaya_dental.git
    echo Git initialized and remote added.
) else (
    echo Git already initialized.
)

echo.
echo [2/5] Checking remote repository...
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Remote not set. Adding origin...
    git remote add origin https://github.com/CHANDU-JANIPIREDDY/vijaya_dental.git
) else (
    echo Remote already configured.
)

echo.
echo [3/5] Adding all files...
git add .

echo.
echo [4/5] Committing changes...
git commit -m "update dental website"

echo.
echo [5/5] Pushing to GitHub...
git push origin main

echo.
echo ============================================
echo   Push Complete!
echo ============================================
echo.
pause
