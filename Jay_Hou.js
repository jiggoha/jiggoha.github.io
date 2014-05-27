$( "#submit" ).click(function() {
    $( "#entryway" ).append( "<img id= \"room_image\" src= \"http://www.dimeo.com/files/imagecache/featured-project-image-large/images/featured-project-images/trumbull-dorm-room.jpg\" width=400/>" +
                              "<div id=\"contact_info\"><p>Name: Jay Hou</p>" +
                              "<p>Class Year: Trumbull '17</p>" +
                              "<p>Email: jiaao.hou@yale.edu</p></div>");
    $( "#textbox" ).val("");
});
