# really Simple Tooltips

A jQuery Plugin for really simple tooltips.

## Installation and Usage

### Installation

When you're reading this, i bet you are familiar with how to install a jquery Plugin. Well, just load the jquery.tooltip.js after the man jQuery file and you're done.

### Usage

To activate Tooltips just do the following:

    $("a[title]").tooltip();

This will activate Tooltips for all Links, that have a title set. The Plugin will display the value of the title attribute within the Tooltip.

### Options

You can define following options

- offset: The offset of tooltip relative to the cursors position (default 15)
- offset_x: The x-offset of the tooltip, relative to the cursors position
- offset_y: The x-offset of the tooltip, releative to the cursors position 
- attribute: The attribute of the hovered element that has the text for the tooltip (default: title)

#### Example

    $("a[title]").tooltip({
    	attribute: "longdesc",
	offset: 30
    });

### Customization

Simple Tooltip is meant to be really simple. Just use this basic CSS and modify it to your needs:


    #rstooltip {
    	width: 150px;
    	background-color: rgb(255,255,255);
    	background: rgba(255,255,255,0.9);
    	z-index: 31337;
    	
    	-webkit-border-radius: 5px;
    	-moz-border-radius: 5px;
    	-webkit-box-shadow: 0px 5px 10px rgba(0,0,0,0.7);
    }
    
    #rstooltip .content {
    	padding: 5px;
    	color: #000;
    }
