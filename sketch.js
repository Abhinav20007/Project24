const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Rubber1;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10
var stone11,stone12,stone13,stone14,stone15,stone16,stone18,stone19,stone20
var Iron1,Iron2,Iron3,Iron4,Iron5,Iron6,Iron7,Iron8,Iron9,Iron10
var Iron11,Iron12,Iron13,Iron14,Iron15,Iron16,Iron17,Iron18,Iron19,Iron20
var Gr,Gr2,Gr3,Gr4,Gr5,Gr6,Gr7,Gr8,Gr9,Gr10
var Gr,Gr12,Gr13,Gr14,Gr15,Gr16,Gr17,Gr18,Gr19,Gr20
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    hammer = new Hammer(500,10);

    
    Rubber1 = new Rubber(514,250,90);

    stone1 = new Stone(100,410);
    stone2 = new Stone(200,410);
    stone3 = new Stone(300,410);
    stone4 = new Stone(400,410);
    stone5 = new Stone(500,410);
    stone6 = new Stone(600,410);
    stone7 = new Stone(700,410);
    stone8 = new Stone(800,410);
    stone9 = new Stone(900,410);
    stone10 = new Stone(1000,410);
    stone11 = new Stone(100,390);
    stone12 = new Stone(200,390);
    stone13 = new Stone(300,390);
    stone14 = new Stone(400,390);
    stone15 = new Stone(500,390);
    stone16 = new Stone(600,390);
    stone17 = new Stone(700,390);
    stone18 = new Stone(800,390);
    stone19 = new Stone(900,390);
    stone20 = new Stone(1000,390);
    
    Iron1 = new Iron(100,300);
    Iron2 = new Iron(200,300);
    Iron3 = new Iron(300,300);
    Iron4 = new Iron(400,300);
    Iron5 = new Iron(50000,300);
    Iron6 = new Iron(600,300);
    Iron7 = new Iron(700,300);
    Iron8 = new Iron(800,300);
    Iron9 = new Iron(900,300);
    Iron10 = new Iron(1000,300);
    Iron11 = new Iron(100,200);
    Iron12 = new Iron(200,200);
    Iron13 = new Iron(300,200);
    Iron14 = new Iron(400,200);
    Iron15 = new Iron(5000,200);
    Iron16 = new Iron(600,200);
    Iron17 = new Iron(700,200);
    Iron18 = new Iron(800,200);
    Iron19 = new Iron(900,200);
    Iron20 = new Iron(1000,200);
   
    
    Gr = new gr(100,50)
    Gr2 = new gr(200,50)
    Gr3 = new gr(300,50)
    Gr4 = new gr(400,50)
    Gr5 = new gr(50000,50)
    Gr6 = new gr(600,50)
    Gr7 = new gr(700,50)
    Gr8 = new gr(800,50)
    Gr9 = new gr(900,50)
    Gr10 = new gr(1000,50)
    Gr11 = new gr(100,20)
    Gr12 = new gr(200,20)
    Gr13 = new gr(300,20)
    Gr14 = new gr(400,20)
    Gr15 = new gr(5000,20)
    Gr16 = new gr(600,20)
    Gr17 = new gr(700,20)
    Gr18 = new gr(800,20)
    Gr19 = new gr(900,20)
    Gr20 = new gr(1000,20)
     
     
   

}
 

function draw(){
    background("lightBlue");
    Engine.update(engine);
   plane.display();
   Rubber1.display();
   hammer.display();
   Iron1.display();
   Iron2.display();
   Iron3.display();
   Iron4.display();
   Iron5.display();
   Iron6.display();
   Iron7.display();
   Iron8.display();
   Iron9.display();
   Iron10.display();
   Iron11.display();
   Iron12.display();
   Iron13.display();
   Iron14.display();
   Iron15.display();
   Iron16.display();
   Iron17.display();
   Iron18.display();
   Iron19.display();
   Iron20.display();
   

   stone1.display();
   stone2.display();
   stone3.display();
   stone4.display();
   stone5.display();
   stone6.display();
   stone7.display();
   stone8.display();
   stone9.display();
   stone10.display();
   stone11.display();
   stone12.display();
   stone13.display();
   stone14.display();
   stone15.display();
   stone16.display();
   stone17.display();
   stone18.display();
   stone19.display();
   stone20.display();
   
    Gr.display();
    Gr2.display();
    Gr3.display();
    Gr4.display();
    Gr5.display();
    Gr6.display();
    Gr7.display();
    Gr8.display();
    Gr9.display();
    Gr10.display();
    Gr11.display();
    Gr12.display();
    Gr13.display();
    Gr14.display();
    Gr15.display();
    Gr16.display();
    Gr17.display();
    Gr18.display();
    Gr19.display();
    Gr20.display();
   
   
 

}
