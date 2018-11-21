/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have content on its feeds', function() {
          allFeeds.forEach(function (feed) {
            let feedLink = feed.url;
            expect(feedLink).not.toBeUndefined();
            expect(feedLink.length).not.toEqual(0);
          });
        });
         it(' has named every feed', function() {
           allFeeds.forEach(function (feed) {
             let feedName = feed.name;
             expect(feedName).not.toBeUndefined();
             expect(feedName.length).not.toEqual(0);
           });
         });

    });

    describe('The menu', function() {
       it ('is hidden by default' , function () {
         let body = document.querySelector("body");
         expect(body.classList.contains('menu-hidden')).toBe(true);
      });

      it ('changes visibility when the menu icon is clicked' , function (){
            let menuButton = document.querySelector(".icon-list");
            let body = document.querySelector("body").className;

            menuButton.click();
            expect(body).not.toEqual(document.querySelector("body").className);
            menuButton.click();
            expect(body).toEqual(document.querySelector("body").className);
      });
    });
      describe('Initial Entries', function(done){
          beforeEach( function(done){
            loadFeed(0,done);
          });

          it ('are loaded in the feed container properly',function(){
            let feedContainer = document.querySelector(".feed");
            expect(feedContainer.children.length > 0).toBe(true);
          });
      });

      describe('New Feed selection', function(){
         let content;
            beforeEach(function(done){
              loadFeed(0);
              content = document.querySelector(".feed").textContent;
              loadFeed(2,done);
            });

            it('changes and the content is indeed,updated.',function(){
              expect(content == document.querySelector(".feed").textContent).not.toBe(true);
         });

      });
}());
