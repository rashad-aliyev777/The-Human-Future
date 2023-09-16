import React, { useEffect } from 'react';
import './css/Zombie3.css';
import Aos from 'aos';

const Zombie3 = () => {
  useEffect(() => {
    
    window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    
    var canvas = document.getElementById("particle");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    function Particle(x, y, distance) {
      this.angle = Math.random() * 2 * Math.PI;
      this.radius = Math.random();
      this.opacity = (Math.random() * 5 + 2) / 10;
      this.distance = (1 / this.opacity) * distance;
      this.speed = this.distance * 0.00003;

      this.position = {
        x: x + this.distance * Math.cos(this.angle),
        y: y + this.distance * Math.sin(this.angle),
      };

      this.draw = function () {
        ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      };
      this.update = function () {
        this.angle += this.speed;
        this.position = {
          x: x + this.distance * Math.cos(this.angle),
          y: y + this.distance * Math.sin(this.angle),
        };
        this.draw();
      };
    }

    function Emitter(x, y) {
      this.position = { x: x, y: y };
      this.radius = 30;
      this.count = 3000;
      this.particles = [];

      for (var i = 0; i < this.count; i++) {
        this.particles.push(
          new Particle(this.position.x, this.position.y, this.radius)
        );
      }
    }

    Emitter.prototype = {
      draw: function () {
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      },
      update: function () {
        for (var i = 0; i < this.count; i++) {
          this.particles[i].update();
        }
        this.draw();
      },
    };

    var emitter = new Emitter(canvas.width / 2, canvas.height / 2);

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      requestAnimFrame(loop);
    }

    loop();
  }, []);

  Aos.init();

  return (
    <div className='zombieee'>
      <div className="zombii_iki_div">
      <div className="zombieee_qara_sol">
          <img src="https://i.redd.it/xhkcl39x4bx81.gif" alt="Planets" data-aos="zoom-out-right"/>
      </div>


      <div className="zombieee_sag_yazilar" data-aos="zoom-out-left">
          <h2>Ton-618</h2>
          <p>Constellation<span>/ Hounds Dogs</span></p>
          <p>Right Ascension<span>/ 12h 28m 24.9s</span></p>
          <p>Declination<span>/ +31° 28′ 38″</span></p>
          <p>Redshift<span>/ 2,219</span></p>
          <p>Distance<span>/ 10.36 billion St. years (3.18 gigaparsec)</span></p>
          <p>Type<span>/ Quasar</span></p>
          <p>Apparent Magnitude<span>/ 15,87</span></p>
      </div>
      </div>
      <canvas id="particle"></canvas>

      
      
    </div>
  );
}

export default Zombie3;
