$(document).ready(function(){
    var useFeed = new Instafeed({
        get: 'user',
        userId: '17841400323040171',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJYN29uRmsxZAzJ3Uk15ZAFdtTGI3dnpIckpLc0JpRWI3RDdEZAlk4M014WlFWWUNnT3dlUHkycTlYbFBRRVFIV1lFQjRhRDR5RDdGUDVXU0t5eUVlTkJzUEY0OHB5MHpIemhFNG5ZAWFk4d21PaHllegZDZD',
        sortBy: 'most-recent',
        template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
    });
    useFeed.run();
})