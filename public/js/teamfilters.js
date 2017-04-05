const TEAM_CURRENT = "team-current";
const TEAM_ALUMNI = "team-alumni";
const TEAM_EVERYONE = "team-everyone";
// The cutoff year for alumni
const GRAD_YEAR = 2016;

// List of teams
var team = [
  {
    id: 'ed',
    name: 'Ed Ngai',
    role: 'President',
    gradYear: 2017,
  },
  {
    id: 'elmer',
    name: 'Elmer Barrera',
    role: 'VP External',
    gradYear: 2018,
  },
  {
    id: 'melissa',
    name: 'Melissa Ngu',
    role: 'VP Internal',
    gradYear: 2017,
  },
  {
    id: 'ellen',
    name: 'Ellen Yang',
    role: 'Community & Culture',
    gradYear: 2017,
  },
  {
    id: 'anna',
    name: 'Anna Le',
    role: 'Community & Culture',
    gradYear: 2018,
  },
  {
    id: 'alex',
    name: 'Alex Li',
    role: 'Marketing',
    gradYear: 2017,
  },
  {
    id: 'jennie',
    name: 'Jennie Yoon',
    role: 'Marketing',
    gradYear: 2017,
  },
  {
    id: 'kaila',
    name: 'Kaila Lee',
    role: 'Marketing',
    gradYear: 2019,
  },
  {
    id: 'ophelia',
    name: 'Ophelia Ding',
    role: 'Graphic Studio',
    gradYear: 2017,
  },
  {
    id: 'tori',
    name: 'Tori Duong',
    role: 'Graphic Studio',
    gradYear: 2018,
  },
  {
    id: 'kaichin',
    name: 'Kai-Chin Shih',
    role: 'Graphic Studio',
    gradYear: 2019,
  },
  {
    id: 'vincent',
    name: 'Vincent Liaw',
    role: 'Tech Chair',
    gradYear: 2018,
  },
  {
    id: 'enrique',
    name: 'Enrique Zavala',
    role: 'Professional Development',
    gradYear: 2018,
  },
  {
    id: 'aman',
    name: 'Aman Gupta',
    role: 'Professional Development',
    gradYear: 2019,
  },
  {
    id: 'christopher',
    name: 'Christopher Wong',
    role: 'Professional Development',
    gradYear: 2020,
  },
  // TODO; add past team
  {
    id: 'michael',
    name: 'Michael Hohl',
    role: 'President',
    gradYear: 2016, // Technically 2017 but he's abroad
  },
  {
    id: 'alyssa',
    name: "Alyssa O'Neill",
    role: 'Mentor Program Lead',
    gradYear: 2016,
  },
  {
    id: 'charu',
    name: 'Charu Mehra',
    role: 'Alumnus',
    gradYear: 2016,
  },
  {
    id: 'chris',
    name: 'Chris Ballinger',
    role: 'Alumnus',
    gradYear: 2016,
  },
  {
    id: 'danielle',
    name: 'Danielle Tobey',
    role: 'Alumnus',
    gradYear: 2016,
  },
  {
    id: 'jingchun',
    name: 'Jingchun Zhou',
    role: 'Alumnus',
    gradYear: 2016,
  },
  {
    id: 'joseph',
    name: 'Joseph Anz',
    role: 'Alumnus',
    gradYear: 2016,
  },
  {
    id: 'lizzy',
    name: 'Lizzy Cowan',
    role: 'Alumnus',
    gradYear: 2016,
  },
  {
    id: 'thomas',
    name: 'Thomas Chang',
    role: 'President',
    gradYear: 2016,
  },
];

$(document).ready(function() {
  generateTeamMembers();
});

// Shows the entire team;
function showAllTeam() {
  $(".team-member").parent().css("display", "inline-block");
}

// Function that generates the HTML for team members
function generateTeamMembers() {

  for (var i=0; i<team.length; i++) {
    // Only currently show current team members
    if (team[i].gradYear <= GRAD_YEAR) continue;

    var currTeam = team[i];
    var role = (currTeam.gradYear >= GRAD_YEAR) ? currTeam.role : 'Alumnus';
    var imageURL = 'public/images/team/' + currTeam.id + '.jpg';
    var hoverImageURL = 'public/images/team/' + currTeam.id + '-hover.jpg';

    currTeam.imageURL = imageURL;
    currTeam.hoverImageURL = hoverImageURL;
    currTeam.index = i; // For keeping track of which board member in array

    // Create each board member div
    var result = '<div class="col-md-3 col-sm-6 du-card--wrapper">' +
      '<div class="card du-card du-card--about du-card--red" data-year="' + currTeam.gradYear + '">' +
        '<div class="card-img-top-wrapper du-card--about-img-top-wrapper">' +
          '<div class="card-img-top du-card--about-img-top du-card--img-top-front" data-index="' + i + '" id="' + currTeam.id + '"></div>' +
          '<div class="card-img-top du-card--about-img-top" data-index="' + i + '" id="' + currTeam.id + '-hover"></div>' +
        '</div>' +
        '<div class="card-block du-card--block">' +
          '<h4 class="du-card--title">' + currTeam.name + '</h4>' +
          '<p class="du-card--desc">' + role + '</p>' +
          '<p class="light-gray">Class of ' + currTeam.gradYear + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';

    $('#board-members-wrapper').append(result);

    // Also preload hover images, as they don't load by default
    // $('.preloaded-images').append('<img src="' + hoverImageURL + '"/>')

    // Add css
    $('#' + currTeam.id).css('background', 'url(' + imageURL + ') no-repeat center center');
    $('#' + currTeam.id).css('background-size', 'cover');

    $('#' + currTeam.id + '-hover').css('background', 'url(' + hoverImageURL + ') no-repeat center center');
    $('#' + currTeam.id + '-hover').css('background-size', 'cover');

    // Add hover effect
    $('#' + currTeam.id).hover(function(e) {
      // First callback is mouseenter      
      $(e.target).css('opacity', 0);
    }, function(e) {
      // Second callback is mouseleave
      $(e.target).css('opacity', 1);
    });
  }

  bindYearsToMembers();
}

function bindYearsToMembers() {
  var team_members = $(".team-member");
  const yearList = team_members.map(function() {
    return parseInt($(this).attr("data-year"), 10);
  });

  const MIN_YEAR = Math.min.apply(Math, yearList);
  const MAX_YEAR = Math.max.apply(Math, yearList);

  // Start with everyone active
  $("#teamselect_everyone").addClass("active");

  $("#teamselect_current").click(function() {
    filterTeam(TEAM_CURRENT);
    $("#teamselect .btn").removeClass("active");
    $(this).addClass("active");
  });
  $("#teamselect_alumni").click(function() {
    filterTeam(TEAM_ALUMNI);
    $("#teamselect .btn").removeClass("active");
    $(this).addClass("active");
  });
  $("#teamselect_everyone").click(function() {
    filterTeam(TEAM_EVERYONE);
    $("#teamselect .btn").removeClass("active");
    $(this).addClass("active");
  });
}

// Filters team by type
function filterTeam(type) {
  if (!type) {
    console.log("Team type not specified");
    return false;
  }
  else if (type == TEAM_CURRENT) {
    showAllTeam();
    var toHide = $(".team-member").filter(function() {
      if ($(this).attr("data-year") > GRAD_YEAR) return false;
      return true;
    });
    toHide.parent().css("display", "none");
  }
  else if (type == TEAM_EVERYONE) {
    showAllTeam();
  }
  else if (type == TEAM_ALUMNI) {
    showAllTeam();
    var toHide = $(".team-member").filter(function() {
      if ($(this).attr("data-year") <= GRAD_YEAR) return false;
      return true;
    });
    toHide.parent().css("display", "none");
  }
  else {
    console.log("Team type not supported");
  }
}
