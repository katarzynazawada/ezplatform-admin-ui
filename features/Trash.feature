Feature: Trash management
  As an administrator
  In order to manage content to my site
  I want to empty trash, delete, restore and restore under new parent location element in trash.

Background:
  Given I am logged as "admin"
    And I go to "Content structure" in "Content" tab


@javascript @common
Scenario: Element in trash can be deleted
  When I click on the left menu bar button "Trash"
    And I delete item fromm trash
      | item       |
      | Folder1    |
  Then success notification that "Deleted selected trash items" appears
    And there's no "Folder1" on "Trash" list

@javascript @common
Scenario: Trash can be emptied
  When I click on the left menu bar button "Trash"
    And I empty the trash
  Then trash is empty

@javascript @common
Scenario: Element in trash can be restored
  When I click on the left menu bar button "Trash"
    And I restore item from trash
      | item       |
      | Folder2    |
  Then success notification that "Items restored under their original location" appears
    And there's no "Folder2" on "Trash" list
    And going to :path there is no "Folder2" "Folder" on Sub-items list

@javascript @common
Scenario: Element in trash can be restored
  When I click on the left menu bar button "Trash"
    And I restore item under new parent location
      | item       |
      | Folder3    |
    And I select content "Media/Images" through UDW
    And I confirm the selection in UDW
  Then success notification that "Items restored under 'Files' location." appears
    And there's no "Folder3" on "Trash" list
    And going to "Media/Files" there is no "Folder3" "Folder" on Sub-items list