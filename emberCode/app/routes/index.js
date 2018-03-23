import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash({
			services:[
				{
					"name":"Unique Layouts",
					"path":"assets/img/bulb.png",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Responsive",
					"path":"assets/img/mobile.png",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Ajax Transitions",
					"path":"assets/img/spinner.png",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"E-Commerce",
					"path":"assets/img/bag.png",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Unlimited Portfolios",
					"path":"assets/img/portfolio.png",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Powerful",
					"path":"assets/img/power.png",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}
			],
			ourTeam:[
				{
					"name":"Riff Raff",
					"designation":"Founder",
					"path":"assets/img/riffraff.jpg",
					"about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
					"twitter":"assets/img/tw.png",
					"facebook":"assets/img/fb.png",
					"linked_in":"assets/img/ln.png"
				},
				{
					"name":"2 Chainz",
					"designation":"Chief Technology Officer",
					"path":"assets/img/2chainz.jpeg",
					"about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
					"twitter":"assets/img/tw.png",
					"facebook":"assets/img/fb.png",
					"linked_in":"assets/img/ln.png"
				},
				{
					"name":"Nene Leakes",
					"designation":"Director of Markerting",
					"path":"assets/img/nene.jpeg",
					"about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
					"twitter":"assets/img/tw.png",
					"facebook":"assets/img/fb.png",
					"linked_in":"assets/img/ln.png"
				},
				{
					"name":"Miley Cirus",
					"designation":"Creative Director",
					"path":"assets/img/miley.jpg",
					"about":"Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
					"twitter":"assets/img/tw.png",
					"facebook":"assets/img/fb.png",
					"linked_in":"assets/img/ln.png"
				}
			],
			brands:[
				{
					"brands_logo":"assets/img/nike.png"},
				{
					"brands_logo":"assets/img/ms.png"},
				{
					"brands_logo":"assets/img/gh.png"
				}
			]
			
		});
	}
});
