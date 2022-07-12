'use strict'
const env = process.env
let envVariables = {
  BASE_URL: env.knowlg_bb_portal_base_url || 'dev.sunbirded.org',
  API_AUTH_TOKEN: env.knowlg_bb_portal_api_auth_token || "",
  USER_API_TOKEN: env.knowlg_bb_portal_user_api_token || "",
  CHANNEL_ID: env.knowlg_bb_portal_channel_id || "",
  USER_ID: env.knowlg_bb_portal_user_id || "",
  USER_ROLE: env.knowlg_bb_portal_user_role || ['creator', 'reviewer', 'collaborator'],
  CREATORS: env.knowlg_bb_portal_users_creator || "",
  REVIEWERS: env.knowlg_bb_portal_users_reviewer || "",
  COLLABORATORS: env.knowlg_bb_portal_users_creator || "",
}
module.exports = envVariables;
