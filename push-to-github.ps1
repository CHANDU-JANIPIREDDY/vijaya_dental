# Vijaya Dental Clinic - Auto Push to GitHub
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Pushing Vijaya Dental Clinic to GitHub" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Set working directory to script location
Set-Location -Path $PSScriptRoot

# Step 1: Initialize Git if not exists
Write-Host "[1/5] Checking Git initialization..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    Write-Host "Git not initialized. Initializing..." -ForegroundColor Gray
    git init
    git branch -M main
    git remote add origin https://github.com/CHANDU-JANIPIREDDY/vijaya_dental.git
    Write-Host "✓ Git initialized and remote added" -ForegroundColor Green
} else {
    Write-Host "✓ Git already initialized" -ForegroundColor Green
}

# Step 2: Check/Set Remote
Write-Host ""
Write-Host "[2/5] Checking remote repository..." -ForegroundColor Yellow
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    Write-Host "Remote not set. Adding origin..." -ForegroundColor Gray
    git remote add origin https://github.com/CHANDU-JANIPIREDDY/vijaya_dental.git
} else {
    Write-Host "✓ Remote already configured" -ForegroundColor Green
}

# Step 3: Add all files
Write-Host ""
Write-Host "[3/5] Adding all files..." -ForegroundColor Yellow
git add .
Write-Host "✓ Files added" -ForegroundColor Green

# Step 4: Commit changes
Write-Host ""
Write-Host "[4/5] Committing changes..." -ForegroundColor Yellow
git commit -m "update dental website"
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Changes committed" -ForegroundColor Green
} else {
    Write-Host "⚠ No changes to commit" -ForegroundColor Gray
}

# Step 5: Push to GitHub
Write-Host ""
Write-Host "[5/5] Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Successfully pushed to GitHub" -ForegroundColor Green
} else {
    Write-Host "✗ Push failed. Check for errors above." -ForegroundColor Red
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Push Complete!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
