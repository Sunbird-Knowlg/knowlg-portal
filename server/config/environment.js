'use strict'
const env = process.env
let envVariables = {
  BASE_URL: env.knowlg_bb_portal_base_url || 'dev.knowlg.sunbird.org',
  API_AUTH_TOKEN: env.knowlg_bb_portal_api_auth_token || "",
  USER_API_TOKEN: env.knowlg_bb_portal_user_api_token || "",
  CHANNEL_ID: env.knowlg_bb_portal_channel_id || "",
  CLOUD_PROVIDER: env.knowlg_bb_cloud_provider || 'azure', // should be like  "azure or aws or gcp"
  USER_ROLE: env.knowlg_bb_portal_user_role, // should be like  "creator,reviewer,collaborator"
  CREATORS: [{userName:'N11',userId:'5a587cc1-e018-4859-a0a8-e842650b9d64',channelId:'01309282781705830427'}],
  REVIEWERS: [{userName:'N150',userId:'ae94b68c-a535-4dce-8e7a-fb9662b0ad68',channelId:'01309282781705830427'}],
  COLLABORATORS: [
    {userName:'Collaborator 1',userId:'8a342db2-c512-476d-9c78-113b09420534',channelId:'01309282781705830427'},
    {userName:'Collaborator 2',userId:'a1e9ac3b-3c17-44da-8068-f735ba914bbc',channelId:'01309282781705830427'},
    {userName:'Collaborator 3',userId:'e8f5bd4d-84be-4280-b8ad-8ce259d47f7c',channelId:'01309282781705830427'},
    {userName:'Collaborator 3',userId:'d5ca92fa-7ad1-44cc-b61a-4cbb2beb1da9',channelId:'01309282781705830427'}
  ]
}
module.exports = envVariables;
