@echo off
cd /d C:\Users\Ronak\Desktop\WEBSITE

git add .

git diff --cached --quiet
if errorlevel 1 goto has_changes
echo No changes to commit
goto end

:has_changes
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)
set timestamp=%mydate%_%mytime%

git commit -m "Auto commit end of day: %timestamp%"
git push origin master

:end
echo Done
pause
