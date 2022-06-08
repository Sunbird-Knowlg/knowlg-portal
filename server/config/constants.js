module.exports = {
    "API": {
       "CONTENT": {
           "UPLOAD" : "/action/content/v3/upload/:do_id",
           "UPLOAD_URL" : "/action/content/v3/upload/url/*",
           "HIERARCHY": "/action/content/v3/hierarchy/*",
           "CREATE": "/action/content/v3/create",
           "BUNDLE": "/action/content/v3/bundle",
           "UNLISTED_PUBLISH": "/action/content/v3/unlisted/publish/*",
           "REVIEW_COMMENTS": "/action/review/comment/v1/read/comment",
           "UPDATE": "/action/content/v3/update/*",
           "GENERAL": "/action/content/v3/*"  
       },
       "DIALCODE": {
           "SEARCH": '/action/dialcode/v3/search'
       },
       "ASSET": {
           "CREATE": 'action/asset/v1/create'
       },
       "ASSESSMENT": "/action/assessment/v3/*",
       "CHANNEL": "/action/channel/v3/*",
       "FRAMEWORK": "/action/framework/v3/*",
       "COMPOSITE": "/action/composite/v3/*",
       "LANGUAGE": "/action/language/v3/*",
       "BUNDLE": "/action/content/v3/bundle/*", 
       "ITEMS_UPDATE": "/action/assessment/v3/items/update/*", 
       "ITEMS_CREATE": "/action/assessment/v3/items/create/*", 
       "PREFIX": {
           "ACTION": "/action",
           "ASSETS": "/assets",
           "API": "/api"
       },
       "GENERAL": {
           "CONTENT_PREVIEW": "/content/preview/*",
           "CONTENT_PLUGINS": "/content-plugins/*",
           "ASSET_PUBLIC": "/assets/public/*",
           "GENERIC_EDITOR": "/generic-editor/*",
           "CONTENT_EDITOR": "/content-editor/*"
       }
    }
}   
