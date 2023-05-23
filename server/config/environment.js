'use strict'
const env = process.env
let envVariables = {
  BASE_URL: env.knowlg_bb_portal_base_url || 'dev.knowlg.sunbird.org',
  API_AUTH_TOKEN: env.knowlg_bb_portal_api_auth_token || 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjdjVVcHZqYXlBREZKZXA0NHRXNVJEbFE2dDlWcW96bCJ9.MotxKvdOVFaeL_26NWUG-GV8ii13ZbPpORW4wffLFaQ",
  USER_API_TOKEN: env.knowlg_bb_portal_user_api_token || "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImFjY2Vzc3YxX2tleTQifQ.eyJhdWQiOiJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJzdWIiOiJmOjVhOGEzZjJiLTM0MDktNDJlMC05MDAxLWY5MTNiYzBmZGUzMTphZTk0YjY4Yy1hNTM1LTRkY2UtOGU3YS1mYjk2NjJiMGFkNjgiLCJyb2xlcyI6W3sicm9sZSI6IkJPT0tfUkVWSUVXRVIiLCJzY29wZSI6W3sib3JnYW5pc2F0aW9uSWQiOiIwMTMwOTI4Mjc4MTcwNTgzMDQyNyJ9XX0seyJyb2xlIjoiQ09OVEVOVF9SRVZJRVdFUiIsInNjb3BlIjpbeyJvcmdhbmlzYXRpb25JZCI6IjAxMzA5MjgyNzgxNzA1ODMwNDI3In1dfSx7InJvbGUiOiJQVUJMSUMiLCJzY29wZSI6W3sib3JnSWQiOiIwMTMwOTI4Mjc4MTcwNTgzMDQyNyJ9XX1dLCJpc3MiOiJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE2NTg0Mzg5MzksImlhdCI6MTY1ODM5NTczOX0.lKk5zGqjt9yb4QSiXTTL9yX7KMBfjBzbRUEUooJsof243gkQa1mxPNez6iSM5vO6KN-wujRgP41zos5XSbel5d58mI2IK9Ok-20xE1MdhebwP85-ArAUexhDZZ1--4RCvnDCd1K5nVTa6jfeF_AICK5CBZeq-TTsWDj2gFCa_lTxaXqAP1Kcdo7QQmd5AP4VJ7RZ1JQAWeB3ZNsBz5hEfN-Ji_rktNq7wMGuhoQswQ63nFAk3PJ-rmxHL8r6wdPe65EZy1f2gGcdFFNlVyaDMdV4HP-yLe7XhTQTvh23hu09spvlh8hhAscx7yeAlubq4aKCk021wMVP7Ovy3C1u0g",
  CHANNEL_ID: env.knowlg_bb_portal_channel_id || "01309282781705830427",
  USER_ROLE: env.knowlg_bb_portal_user_role || "creator,reviewer,collaborator",
  CREATORS: env.knowlg_bb_portal_users_creator || [{userName:'N11',userId:'5a587cc1-e018-4859-a0a8-e842650b9d64',channelId:'01309282781705830427'}],
  REVIEWERS: env.knowlg_bb_portal_users_reviewer || [{userName:'N150',userId:'ae94b68c-a535-4dce-8e7a-fb9662b0ad68',channelId:'01309282781705830427'}],
  COLLABORATORS: env.knowlg_bb_portal_users_collaborator || [
    {userName:'Collaborator 1',userId:'8a342db2-c512-476d-9c78-113b09420534',channelId:'01309282781705830427'},
    {userName:'Collaborator 2',userId:'a1e9ac3b-3c17-44da-8068-f735ba914bbc',channelId:'01309282781705830427'},
    {userName:'Collaborator 3',userId:'e8f5bd4d-84be-4280-b8ad-8ce259d47f7c',channelId:'01309282781705830427'},
    {userName:'Collaborator 3',userId:'d5ca92fa-7ad1-44cc-b61a-4cbb2beb1da9',channelId:'01309282781705830427'}
  ]
}
module.exports = envVariables;