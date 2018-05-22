const TEAM_CURRENT = "team-current";
const TEAM_ALUMNI = "team-alumni";
const TEAM_EVERYONE = "team-everyone";
// The cutoff year for alumni
const GRAD_YEAR = 2016;

// List of teams
var team = [
  {
    id: 'aman',
    name: 'Aman Gupta',
    role: 'Co-President',
    linkedin: 'https://linkedin.com/in/97agupta',
    gradYear: 2019,
  },
  {
    id: 'kaila',
    name: 'Kaila Lee',
    role: 'Co-President',
    linkedin: 'https://www.linkedin.com/in/kailatlee/',
    gradYear: 2019,
  },
  {
    id: 'vincent',
    name: 'Vincent Liaw',
    role: 'Vice President External',
    linkedin: 'https://www.linkedin.com/in/vincentliaw/',
    gradYear: 2018,
  },
  {
    id: 'anna',
    name: 'Anne Le',
    role: 'Vice President Internal',
    linkedin: 'https://www.linkedin.com/in/anne-le-607415bb/',
    gradYear: 2018,
  },
  {
    id: 'kai-chin',
    name: 'Kai-Chin Shih',
    role: 'Vice President Finance',
    linkedin: 'https://www.linkedin.com/in/kaichinshih/',
    gradYear: 2019,
  },
  {
    id: 'chris',
    name: 'Chris Wong',
    role: 'Professional Development',
    linkedin: 'https://linkedin.com/in/ckwong97',
    gradYear: 2020,
  },
  {
    id: 'anita',
    name: 'Anita Chuen',
    role: 'Professional Development',
    linkedin: 'https://linkedin.com/in/anitachuen',
    gradYear: 2020,
  },
  {
    id: 'josh',
    name: 'Joshua Tjong',
    role: 'Professional Development',
    linkedin: 'https://www.linkedin.com/in/joshua-tjong/',
    gradYear: 2018,
  },
  {
    id: 'chaitanya',
    name: 'Chaitanya Prashant',
    role: 'Community and Culture',
    linkedin: 'https://linkedin.com/in/chaitanyaprashant',
    gradYear: 2020,
  },
  {
    id: 'tamar',
    name: 'Tamar Esserman',
    role: 'Community and Culture',
    linkedin: '',
    gradYear: 2018,
  },
  {
    id: 'akanksha',
    name: 'Akanksha Kevalramani',
    role: 'Marketing Chair',
    linkedin: 'https://linkedin.com/in/itsakanksha/',
    gradYear: 2018,
  },
  {
    id: 'steven',
    name: 'Steven Chen',
    role: 'Marketing Chair',
    linkedin: 'https://www.linkedin.com/in/StevChen/',
    gradYear: 2020,
  },
  {
    id: 'bianca',
    name: 'Bianca Moy',
    role: 'Marketing Chair',
    linkedin: 'https://www.linkedin.com/in/biancamoy/',
    gradYear: 2021,
  },
  {
    id: 'nancy',
    name: 'Nancy Bui',
    role: 'Visual Design',
    linkedin: 'https://www.linkedin.com/in/nancyybui/',
    gradYear: 2020,
  },
  {
    id: 'emily',
    name: 'Emily Nguyen',
    role: 'Visual Design',
    linkedin: 'https://www.linkedin.com/in/emilymnguyen/',
    gradYear: 2019,
  },
  {
    id: 'joel',
    name: 'Joel Sequeira',
    role: 'Tech Chair',
    linkedin: 'https://www.linkedin.com/in/joelseq/',
    gradYear: 2018,
  },
  {
    id: 'ashkon',
    name: 'Ashkon Honardoost',
    role: 'Honorary Board Member',
    linkedin: 'https://www.linkedin.com/in/ahonardo',
    gradYear: 2018,
  }
  /*
  {
    id: 'ed',
    name: 'Ed Ngai',
    role: 'President',
    linkedin: 'https://www.linkedin.com/in/engai/',
    gradYear: 2017,
  },
  {
    id: 'elmer',
    name: 'Elmer Barrera',
    role: 'VP External',
    linkedin: 'https://www.linkedin.com/in/elmerbarrera',
    gradYear: 2018,
  },
  {
    id: 'melissa',
    name: 'Melissa Ngu',
    role: 'VP Internal',
    linkedin: 'https://www.linkedin.com/in/melissangu',
    gradYear: 2017,
  },
  {
    id: 'ellen',
    name: 'Ellen Yang',
    role: 'Community & Culture',
    linkedin: 'http://linkedin.com/in/yangellen',
    gradYear: 2017,
  },
  {
    id: 'anna',
    name: 'Anna Le',
    role: 'Community & Culture',
    linkedin: 'https://www.linkedin.com/in/anne-le-607415bb/',
    gradYear: 2018,
  },
  {
    id: 'alex',
    name: 'Alex Li',
    role: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/alexalexlili/',
    gradYear: 2017,
  },
  {
    id: 'jennie',
    name: 'Jennie Yoon',
    role: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/yoonjennie/',
    gradYear: 2017,
  },
  {
    id: 'kaila',
    name: 'Kaila Lee',
    role: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/kailatlee/',
    gradYear: 2019,
  },
  {
    id: 'ophelia',
    name: 'Ophelia Ding',
    role: 'Graphic Studio',
    linkedin: 'http://linkedin.com/in/opheliading',
    gradYear: 2017,
  },
  {
    id: 'tori',
    name: 'Tori Duong',
    role: 'Graphic Studio',
    linkedin: 'https://www.linkedin.com/in/tori-duong-194823120/',
    gradYear: 2018,
  },
  {
    id: 'kaichin',
    name: 'Kai-Chin Shih',
    role: 'Graphic Studio',
    linkedin: 'https://www.linkedin.com/in/kaichinshih/',
    gradYear: 2019,
  },
  {
    id: 'vincent',
    name: 'Vincent Liaw',
    role: 'Tech Chair',
    linkedin: 'https://www.linkedin.com/in/vincentliaw/',
    gradYear: 2018,
  },
  {
    id: 'enrique',
    name: 'Enrique Zavala',
    role: 'Professional Development',
    linkedin: 'https://www.linkedin.com/in/enrique-zavala-a00326b8',
    gradYear: 2018,
  },
  {
    id: 'aman',
    name: 'Aman Gupta',
    role: 'Professional Development',
    linkedin: 'http://linkedin.com/in/97agupta',
    gradYear: 2019,
  },
  {
    id: 'christopher',
    name: 'Christopher Wong',
    role: 'Professional Development',
    linkedin: 'http://linkedin.com/in/ckwong97',
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
  */
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
    var imageURL = 'public/images/team/' + currTeam.id + '.png';
    var hoverImageURL = 'public/images/team/' + currTeam.id + '-hover.png';

    currTeam.imageURL = imageURL;
    currTeam.hoverImageURL = hoverImageURL;
    currTeam.index = i; // For keeping track of which board member in array

    // Create each board member div
    var result = '<div class="col-md-4 col-sm-6 du-card--wrapper">' +
      '<div class="card du-card du-card--about du-card--red" data-year="' + currTeam.gradYear + '">' +
        '<div class="card-img-top-wrapper du-card--about-img-top-wrapper">' +
          '<div class="card-img-top du-card--about-img-top du-card--img-top-front" data-index="' + i + '" id="' + currTeam.id + '"></div>' +
          '<div class="card-img-top du-card--about-img-top" data-index="' + i + '" id="' + currTeam.id + '-hover"></div>' +
        '</div>' +
        '<div class="card-block du-card--block">' +
          '<h4 class="du-card--title">' + currTeam.name +
            '<a class="du-card--linkedin" href="' + currTeam.linkedin + '" target="_blank">' +
              '<i class="fa fa-linkedin" aria-hidden="true"></i>' +
            '</a>' +
          '</h4>' +
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
