
// Define the `portfolioApp` module
var app = angular.module("app", []);

//define `yearController`
app.controller('yearController', function ($scope) {
$scope.date = new Date();
});

// Define the `portfolioController`
app.controller('portfolioController', function ($scope) {
  $scope.portfolioItems = [
    {
      title: 'Campus Map',
      subtitle: 'University of Texas Medical Branch',
      image:'port_utmb.jpg',
    image_sm:'port_utmb_sm.jpg',
      desc:'The UTMB campus infrastructure was severely damaged by flood waters caused by Hurricane Ike. This map illustrates proposed infrastructure upgrades designed to increase energy effeciency and storm resiliance. This illustration is used by Affiliated Engineers, Inc. for several of their marketing pieces regarding the UTMB campus, and infrastructure resiliance.',
      link:'/port_utmb_big.jpg',
      link_class:'icon-pic',
      link_txt:'View full size',
    },
    {
      title: 'Corporate Website',
      subtitle: 'Affiliated Engineers, Inc.',
      image:'port_aeieng.jpg',
      desc:"Affiliated Engineers, Inc. needed an upgrade of their old, static website which could not be easily maintained. My solution was to write a custom Content Management system in php. The new content mamnagement system takes data from AEI's existing databases and uses that information to dynamically populate the website's pages. I also redesigned the look of the website, and made the pages responsive to better support AEI's mobile users.",
     link:'http://www.aeieng.com/',//set to no to hide
      link_class:'icon-link',
      link_txt:'Visit the website',
    },
          {
      title: 'Build with Blocks',
      subtitle: "Block-building Web App",
      image:'port_blocks.gif',
      desc:"This web app lets you build simple isometric scenes as with basic block components. The appis powered by Javascript, and the blocks are rendered with 3D css techniques.",
     link:'http://codepen.io/kvana/full/ygjKZB/',//set to no to hide
      link_class:'icon-play',
      link_txt:'Start building!',
    },
    {
      title: 'Dungeons & Javascript',
      subtitle: "Text-based RPG",
      image:'port_dnj.gif',
      desc:"Dungeons & Javascript (D&J) is a simple text-based dungeon crawling game with some rogue-like features. The goal is to get through as many rooms as possible.  D&J is written entirely in Javascript, css, and html.  Also... ASCII art!",
     link:'/dnj/dnj.html',//set to no to hide
      link_class:'icon-play',
      link_txt:'Play it!',
    },
    {
      title: 'Absolutely',
      subtitle: 'Sticker Artwork',
      image:'port_abso.gif',
      desc:'Sticker artwork designed as a hand out for participants of the Greenbuild 2010 conference. "Aboslutely" refers to absolute metrics when determining the sustainability rating of a structure. This contrasts with relative metrics, which is the more often used (though less accurate) rating method.',
     link:'no',//set to no to hide
      link_class:'',
      link_txt:'',
    },
    {
      title: 'Mechanical Floor',
      subtitle: "Ann & Robert H. Lurie Children's Hospital of Chicago.",
      image:'port_lurie.jpg',
      desc:"An illustration done for Affiliated Engineers Inc. of the mechanical level in the Ann & Robert H. Lurie Children's Hospital of Chicago. The hospital is noteworthy for it's vertical orientation (hospitals are almost always laid-out horizontally) and for the complex interaction between structural and HVAC components in the building's mechanical floor.",
     link:'/port_lurie_big.jpg',//set to no to hide
      link_class:'icon-pic',
      link_txt:'View full-size',
    },
    {
      title: 'Happy Birthday, FiL!',
      subtitle: "Digital Booklet",
      image:'port_bday.gif',
      desc:"A web-based booklet celebrating the 1-year anniversary of Affiliated Engineers, Inc.'s new knowledge sharing platform (nick-named FiL). The booklet features a user driven page-turning effect (only on desktops) and animation to help bring the illustrations to life. The illustrations were drawn with Adobe Illustrator, and animated by css.",
     link:'http://www.aeieng.com/images/misc/fil_bday.html',//set to no to hide
      link_class:'icon-link',
      link_txt:'View the booklet',
    },
    {
      title: 'Doomhold',
      subtitle: "Video game development",
      image:'port_vgame.gif',
      desc:"Doomhold is a Retro action/RPG video game curently in development. I am doing all the programming as well as creating all of the art assets for the project.  The demo is currently avaliable for window 7+.",
     link:'http://kylavana.github.io/doomhold_demo_1.0.0.3.zip',//set to no to hide
      link_class:'icon-dl',
      link_txt:'Download the demo',
    },
    {
      title: 'Anger',
      subtitle: 'Linocut',
      image:'port_fist.gif',
      desc:'Personal project - linocut is similar to woodcut in that the design is cut into the linoleum with a chisel. The uncarved areas represent a mirror image of the parts that are to be printed. The surface is then coated with ink, and pressed into paper or fabric. The reductive process was a fun challenge!',
     link:'no',//set to no to hide
      link_class:'',
      link_txt:'',
    },
    {
      title: 'Intelligent Buildings',
      subtitle: "Booklet Design & Illustration",
      image:'port_ib2.gif',
      desc:"This booklet was created as marketing collateral for Affiliated Engineers Inc.'s Intelligent Building (IB) Group. The IB group specializes in optimizing data to improve building energy effiency and lower maintenance costs. In addition to designing the layout of the booklet, I also drew all of the icons, illustrations, and infographics.",
     link:'http://issuu.com/kyla.v/docs/ib_booklet?workerAddress=ec2-54-224-253-214.compute-1.amazonaws.com',//set to no to hide
      link_class:'icon-link',
      link_txt:'Read the booklet',
    },
    {
      title: 'Cardiff Castle',
      subtitle: "Charcol Sketch",
      image:'port_castle.jpg',
      desc:"An illustration done for Affiliated Engineers Inc. of the mechanical level in the Ann & Robert H. Lurie Children's Hospital of Chicago. The hospital is noteworthy for it's vertical orientation (hospitals are almost always laid-out horizontally) and for the complex interaction between structural and HVAC components in the building's mechanical floor.",
     link:'no',//set to no to hide
      link_class:'',
      link_txt:'',
    },
  ];
});
// End Angular Module