@echo off
git ls-files project > ls_files_project.txt 2>&1
git status -uall project > status_project.txt 2>&1
git check-ignore -v project >> status_project.txt 2>&1
