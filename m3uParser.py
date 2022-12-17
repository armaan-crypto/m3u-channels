def getObjects(filename):
    lines = []
    urls = []
    teams = []
    with open(filename) as f:
        for line in f:
            lines.append(line.strip())
    for line in range(0, len(lines), 2):
        url = lines[line + 1]
        title = lines[line].split(",")[1]
        urls.append(url)
        teams.append(title)
    return (teams, urls)

(teams, urls) = getObjects("cbs.txt")
selectedTeam = input("Which team would you like to watch? ")
print(urls[teams.index(selectedTeam)])