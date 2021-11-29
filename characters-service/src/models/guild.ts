interface IGuild {
    G_Name: string,
    G_Mark: string,
    G_Score: number,
    G_Master: string,
    G_Count: number,
    Number: number,
    G_Type: number,
    G_Rival: number,
    G_Union: number
}

interface IGuildMembers {
    Name: string,
    G_Name: string,
    G_Level: number,
    G_Status: number
}

export { IGuild, IGuildMembers };