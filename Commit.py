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
            subprocess.run(command, shell=True, cwd=folder_path, text=True,stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        except Exception as e:
            pass


def returnCommit(n):
    return [
            'git add .',
            f'git commit -m {n}',
            'git push origin master'
        ]


def start():
    if(is_git_repo()==False):
        repo=input("enter your repository : ")
        init=[
            'git init',
            'git add .',
            'git commit -m "Initial commit"',
            f'git remote add origin {repo}',
            'git push -u origin master'
        ]
        run_commands_here(init)
    else:
        commit_message=input("enter your Commit Comment : ")
        run_commands_here(returnCommit(commit_message))
        
    print("Done..")
        
start()