import json
import os

# Path to Projects folder from repo root directory
projects_path = "Projects"
# Path to json list of projects
projects_list_json_path = "Utilities/projects_list.json"
# Github username
github_user = "Pjsrcool"

if __name__ == "__main__":
    if not os.path.isdir(projects_path):
        os.mkdir(projects_path)

    projects_list = json.load(open(projects_list_json_path))

    # begin cloning all projects
    os.chdir(projects_path)
    for p in projects_list:
        if os.path.isdir(p["name"]):
            print(p["name"], "- Cannot Clone. Project \"" + p["name"] + "\" already exists.")
        else:
            print(p["name"] + "- cloning...")

            if p["fork"] == "":
                print("-- no fork. cloning original...")
                github_ssh_url = "git@github.com:" + p["original_owner"] + "/" + p["name"]
            else:
                github_ssh_url = "git@github.com:" + github_user + "/" + p["name"]

            os.system("git clone " + github_ssh_url)
    
    print("Done")