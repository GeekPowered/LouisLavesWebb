  jQuery(document).ready(function () {

      jQuery('#quiz-slider').slick({
          infinite: false,
          arrows: true,
          touchMove: false,
          swipe: false,
          draggable: false,
          adaptiveHeight: true,
          prevArrow: jQuery('.prevArrow'),
          nextArrow: jQuery('.nextArrow'),
          dots: false
      });

      var answers = {
          q1: '',
          q2: '',
          q3: '',
          q4: '',
          q5: '',
      }

      var matches = [];

      const therapists = {
          kaleeGower: {
              q1: ['individual', 'couples', 'family', 'group'],
              q2: ['anxietyDepression', 'angerAggression', 'lifeTransitions', 'perfectionism', 'eatingDisorders', 'health', 'relationship', 'lgbtqia', 'other'],
              q3: ['inPerson', 'telehealth', 'noPref'],
              q4: ['female', 'noPref', 'nonBinary'],
              q5: ['youngAdult', 'adult', 'senior'],
              info: {
                  name: 'Kalee Gower',
                  title: 'LCSW - Clinical Director',
                  link: '/kalee-gower/',
                  image: '/wp-content/uploads/2022/03/kalee.jpeg'
              }
          },
          robbiePrice: {
              q1: ['individual', 'couples', 'adolescent', 'group'],
              q2: ['anxietyDepression', 'angerAggression', 'trauma', 'eatingDisorders', 'autismSpectrum', 'health', 'relationship', 'other'],
              q3: ['inPerson', 'telehealth', 'noPref'],
              q4: ['male', 'noPref'],
              q5: ['adolescent', 'youngAdult', 'adult', 'senior'],
              info: {
                  name: 'Robbie Price',
                  title: 'LPC - Senior Associate',
                  link: '/robbie-price/',
                  image: '/wp-content/uploads/2019/10/Robbie-Price-400x260.png'
              }
          },
          louisLaves: {
              q1: ['individual', 'couples', 'family', 'adolescent'],
              q2: ['addictions', 'anxietyDepression', 'trauma', 'studentConcerns', 'eatingDisorders', 'autismSpectrum', 'health', 'relationship', 'lgbtqia', 'other'],
              q3: ['inPerson', 'telehealth', 'noPref'],
              q4: ['male', 'noPref', 'nonBinary'],
              q5: ['adolescent', 'youngAdult', 'adult', 'senior'],
              info: {
                  name: 'Louis Laves-Webb',
                  title: 'LCSW - LPC-S - Psychotherapist',
                  link: '/louis-laves-webb/',
                  image: '/wp-content/uploads/2019/02/louis-laves_webb-400x260.jpg'
              }
          },
          sarahFreilicher: {
              q1: ['individual', 'couples', 'adolescent'],
              q2: ['anxietyDepression', 'trauma', 'lifeTransitions', 'eatingDisorders', 'autismSpectrum', 'health', 'relationship', 'lgbtqia', 'other'],
              q3: ['inPerson', 'telehealth', 'noPref'],
              q4: ['female', 'noPref', 'nonBinary'],
              q5: ['adolescent', 'youngAdult', 'adult'],
              info: {
                  name: 'Sarah Freilicher',
                  title: 'LMSW',
                  link: '/sarah-freilicher/',
                  image: '/wp-content/uploads/2021/06/Sarah-site-size-photo.jpg'
              }
          },
          anielaBaczewski: {
              q1: ['individual', 'couples'],
              q2: ['addictions', 'anxietyDepression', 'trauma', 'lifeTransitions', 'autismSpectrum', 'health', 'relationship', 'lgbtqia', 'other'],
              q3: ['inPerson', 'telehealth', 'noPref'],
              q4: ['female', 'noPref'],
              q5: ['youngAdult', 'adult', 'senior'],
              info: {
                  name: 'Aniela Baczewski',
                  title: 'LPC – Associate',
                  link: '/aniela-baczewski/',
                  image: '/wp-content/uploads/2021/03/AnielaB2reshigh.jpg'
              }
          },
          susanMiller: {
              q1: ['individual', 'couples', 'family', 'group'],
              q2: ['anxietyDepression', 'trauma', 'lifeTransitions', 'health', 'relationship', 'other'],
              q3: ['inPerson', 'telehealth', 'noPref'],
              q4: ['female', 'noPref'],
              q5: ['youngAdult', 'adult', 'senior'],
              info: {
                  name: 'Susan Miller',
                  title: 'LPC-Associate',
                  link: '/susan-miller/',
                  image: '/wp-content/uploads/2019/02/SusanMiller1-400x260.jpg'
              }
          },
          emilyDobrowski: {
              q1: ['individual', 'couples', 'adolescent',],
              q2: ['addictions', 'anxietyDepression', 'trauma', 'lifeTransitions', 'health', 'relationship', 'other'],
              q3: ['inPerson', 'telehealth', 'noPref'],
              q4: ['female', 'noPref', 'nonBinary'],
              q5: ['adolescent', 'youngAdult', 'adult'],
              info: {
                  name: 'Emily Dobrowski',
                  title: 'LMSW',
                  link: '/emily-dobrowski/',
                  image: '/wp-content/uploads/2021/10/emily-d.jpg'
              }
          },
          emilyCheney: {
              q1: ['individual', 'couples', 'group'],
              q2: ['anxietyDepression', 'lifeTransitions', 'relationship', 'parenting', 'trauma'],
              q3: ['telehealth', 'noPref'],
              q4: ['female', 'noPref', 'nonBinary'],
              q5: ['youngAdult', 'adult'],
              info: {
                  name: 'Emily Harrington-Cheney',
                  title: 'LCSW, LPC - Senior Associate',
                  link: '/emily-harrington-cheney/',
                  image: '/wp-content/uploads/2022/02/emily-hc.jpeg'
              }
          },
          kimMasoni: {
              q1: ['individual', 'couples', 'adolescent', 'group'],
              q2: ['anxietyDepression', 'trauma', 'relationship', 'lifeTransitions', 'eatingDisorders', 'lgbtqia', 'other'],
              q3: ['telehealth', 'noPref'],
              q4: ['male', 'female', 'noPref', 'nonBinary'],
              q5: ['adolescent', 'youngAdult', 'adult', 'senior'],
              info: {
                  name: 'Kim Masoni',
                  title: 'LPC-Associate',
                  link: '/kim-masoni/',
                  image: '/wp-content/uploads/2022/05/Kim-masoni-hz.jpg'
              }
          },
          carolynMiles: {
              q1: ['individual', 'couples', 'group'],
              q2: ['anxietyDepression', 'trauma', 'relationship', 'lifeTransitions', 'health', 'other'],
              q3: ['telehealth', 'noPref'],
              q4: ['male', 'female', 'noPref', 'nonBinary'],
              q5: ['youngAdult', 'adult', 'senior'],
              info: {
                  name: 'Carolyn Miles',
                  title: 'LMSW',
                  link: '/carolyn-miles/',
                  image: '/wp-content/uploads/2022/07/carolyn-hz.jpg'
              }
          }
      }

      function calcTherapists() {

          // Clear prior matches
          matches = [];

          // Loop through each therapist and determine if current answers match therapist's parameters
          for (var therapist in therapists) {
              var q1match = therapists[therapist]['q1'].includes(answers['q1']);
              var q2match = therapists[therapist]['q2'].includes(answers['q2']);
              var q3match = therapists[therapist]['q3'].includes(answers['q3']);
              var q4match = therapists[therapist]['q4'].includes(answers['q4']);
              var q5match = therapists[therapist]['q5'].includes(answers['q5']);

              // If this therapist has all answers within their paramters, push them to the results array
              if (q1match && q2match && q3match && q4match && q5match) {
                  matches.push(therapist);
              }
          }

          // If there are any matches in the match array, clear the .therapist-results element and generate a column for each one in the array
          if (matches[0]) {

              // Clear Results element
              jQuery('.therapist-results').html('');

              // Loop through matched therapists
              matches.forEach(function (therapist) {

                  // Append this markup to the results element for each found therapist to the results array
                  var thisTherapist = therapists[therapist];
                  jQuery('.therapist-results').append(`
                           <div class="therapist-col">
                               <div class="therapist-card">
                                   <div class="therapist-img-wrapper">
                                       <img src="${thisTherapist['info']['image']}">
                                   </div>
                                   <h4 class="therapist-name">${thisTherapist['info']['name']}</h4>
                                   <p class="therapist-title">${thisTherapist['info']['title']}</p>
                                   <div class="gps-button-wrapper">
                                       <a class="gps-button button-2" href="${thisTherapist['info']['link'] + querystring}" target="_blank">More About ${thisTherapist['info']['name'].split(' ')[0]}</a>
                                   </div>
                               </div>
                           </div>
                       `);
              });

              // Show results element
              jQuery('.results-slide > div.active').removeClass('active');
              jQuery('.has-results').addClass('active');
          } else {
              // Show no results element
              jQuery('.results-slide > div.active').removeClass('active');
              jQuery('.no-results').addClass('active');
          }
      }

      jQuery('#quiz-slider a[href="#"]').click(function (e) {
          e.preventDefault;
      });

      jQuery('.quiz-buttons button').click(function () {
          var thisBtn = jQuery(this);
          switch (thisBtn.data('question')) {
              case 'typeOfTherapy':
                  jQuery('.question-1 .active').removeClass('active');
                  thisBtn.addClass('active');
                  answers.q1 = thisBtn.data('answer');
                  calcTherapists();
                  break;
              case 'specialty':
                  jQuery('.question-2 .active').removeClass('active');
                  thisBtn.addClass('active');
                  answers.q2 = thisBtn.data('answer');
                  calcTherapists();
                  break;
              case 'method':
                  jQuery('.question-3 .active').removeClass('active');
                  thisBtn.addClass('active');
                  answers.q3 = thisBtn.data('answer');
                  calcTherapists();
                  break;
              case 'therapistGender':
                  jQuery('.question-4 .active').removeClass('active');
                  thisBtn.addClass('active');
                  answers.q4 = thisBtn.data('answer');
                  calcTherapists();
                  break;
              case 'yourAge':
                  jQuery('.question-5 .active').removeClass('active');
                  thisBtn.addClass('active');
                  answers.q5 = thisBtn.data('answer');
                  calcTherapists();
                  break;
              default: null
          }
      });

      jQuery(window).scroll(function(){
          jQuery('#quiz-slider').slick('resize');
      });

      // Restart button
      jQuery('#quiz-slider .restart').click(function () {
          answers = {
              q1: '',
              q2: '',
              q3: '',
              q4: '',
              q5: ''
          }
          matches = [];
          jQuery('.quiz-buttons .active').removeClass('active');
          jQuery('#quiz-slider').slick('slickGoTo', 0);
      });

  });
