@echo off
echo Starting auto-push pipeline...

:: Stage all changes
git add .

:: Create a commit with the current date and time
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)
set timestamp=%mydate%_%mytime%

git commit -m "Auto-commit end of day work: %timestamp%"

:: Push to the main branch
git push origin main

echo.
echo ==========================================================
echo Code successfully pushed to GitHub!
echo ==========================================================
pause
