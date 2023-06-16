Feature: Inshur Test Website

    Tests that cover the Inshur Test Website

    Background:
        Given the user visits Inshur Test Website

    Scenario: User can see Inshur logo on website
        Then the Inshur logo should be visible on the page

    Scenario: User can see website title on website
        Then website title should visible on page

    Scenario Outline: User can see the details of the selected user when Click to View Details button is clicked
        When they click the '<User>' user
        Then the '<User>' details are displayed

        Examples:
            | User   |
            | First  |
            | Second |
            | Third  |

#  Below are tests that I have written but wasn't able to automate

#   Scenario: User can see details of first user in list when landing on website
#         Then the first users details should be displayed fully on page

#   Scenario: User can see details of first user after selecting another user and then refreshing the page
#         When they select a different user
#         And refresh the webpage
#         Then the first users details should be selected and displayed

#   Scenario Outline: Webpage should be responsive when user zooms in or out
#        When they zoom '<Zoom>'
#        Then contents of webpage should respond to this

#        Examples:
#           | Zoom |
#           | In   |
#           | Out  |


