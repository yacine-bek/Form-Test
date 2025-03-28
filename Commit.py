import os
import subprocess

def is_git_repo():
    try:
        result = subprocess.run(['git', 'status'], cwd=os.path.dirname(os.path.abspath(__file__)), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return result.returncode == 0
    except FileNotFoundError:
        return False

def run_commands_here(commands):
    folder_path = os.getcwd()
    for command in commands:
        try:
            subprocess.run(command, shell=True, cwd=folder_path, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        except Exception as e:
            pass

def returnCommit(n):
    return [
            'git add .',           # Add all changes except ignored files
            f'git commit -m "{n}"',  # Commit with the provided message
            'git push origin master'  # Push changes to the remote repository
        ]

def start():
    if not is_git_repo():
        repo = input("Enter your repository URL: ")
        init = [
            'git init',
            'git add .',  # Add all files, but test.py will be ignored if it's not staged
            'git commit -m "Initial commit"',
            f'git remote add origin {repo}',
            'git push -u origin master'
        ]
        run_commands_here(init)
    else:
        commit_message = input("Enter your Commit Message: ")
        # Exclude test.py explicitly using git commands
        subprocess.run('git rm --cached Commit.py', shell=True)  # Ensure test.py is not staged
        run_commands_here(returnCommit(commit_message))
        
    print("Done..")

start()
