import logo from './logo.svg';
import './App.css';
import handSealsImg from './images/HandSeals.webp'
import sketch from './images/sketch.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Report/>
      </header>
    </div>
  );
}

const Report = () => {
  return (
    <div style={{width: '90%', textAlign: 'left'}}>
      <h1>Kainoa Borges CSCI 4570</h1>
      <h1>VR Hand Gesture Spellcasting</h1>
      <h2><strong>Introduction:</strong></h2>
      <ul>
        <li>One of the longest-standing problems in the Virtual Reality space is hand tracking. Many developers over the years have strived to improve VR immersion even further by allowing users to interact with Virtual Worlds without the need for a physical controller. Great strides have been made in recent years to improve hand tracking capabilities, but many experiences have yet to fully utilize hand tracking and hand gestures in their design. I aim to design a prototype for a fully hand-tracked experience with stringed hand-gesture combinations as the main method of player control</li>
      </ul>
      <h2><strong>Main Focus</strong>: Complex Hand Tracking Gestures</h2>
      <ul>
          <li>The prototype will revolve around casting spells using sets of hand signs, as popularized in the anime <em>Naruto</em></li>
          <li>This will be accomplished using Oculus Quest 2 Hand Tracking in Unity (Unity XR hands)</li>
          <li>Players will be placed in a training environment, attacking training dummies using different gesture-based abilities</li>
          <li>Hand Gesture control-schemes are becoming more possible thanks to recent leaps in hardware and software integration, and there are many resources for learning how to implement this in Unity</li>
        <ul>
          <li>Creating custom gestures for Unity XR hand tracking (<a href="https://www.youtube.com/watch?v=lBzwUKQ3tbw" target="_blank" rel="noopener">https://www.youtube.com/watch?v=lBzwUKQ3tbw</a>)</li>
          <li>Custom hand poses for Unity XR hand tracking (<a href="https://www.youtube.com/watch?v=lxHI2l8dda4" target="_blank" rel="noopener">https://www.youtube.com/watch?v=lxHI2l8dda4</a>)</li>
        </ul>
      </ul>
      <h2><strong>Necessary Devices/Assumptions:</strong></h2>
      <ul>
        <li>Hand Tracking will be developed with and based on the hand tracking provided by the Oculus Quest 2</li>
        <li>The prototype will initially require a PC connected to the Oculus using Oculus Link, but it may be possible to run directly on the device, depending on the deployment process.</li>
      </ul>
      <h2><strong>Implementation: </strong>Hand Gesture and Pose Recognition:</h2>
      <ul>
        <li>What gestures are used in the actual prototype will depend on what is feasible with current hand tracking technology, provided by the Oculus Quest 2</li>
        <li>Examples of Naruto hand signs/poses:</li>
        <ul>
          <img src={handSealsImg}></img>
          <li>https://static.wikia.nocookie.net/narutofanon/images/0/0f/HandSeals.jpg/revision/latest?cb=20080623153134</li>
        </ul>
        <li>It is possible that these hand signs will not be possible due to the limitations of camera-based hand-tracking. In that case, the gestures used in the prototype will be simplified versions</li>
        <ul>
          <li>At least 5 of these gestures should be available to string together to select various abilities in the prototype</li>
          <li>The default pinching, grabbing, and poking gestures will be used to navigate menus</li>
        </ul>
      </ul>
      <ul>
        <h3><strong>Sketch/Mockup:</strong></h3>
        <ul>
          <li>Below is a quick sketch of what the prototype will look like while playing. The gesture tracker in the top left will float above the training area and not be parented to the user&rsquo;s screen as it could lead to motion sickness issues.</li>
          <img src={sketch} style={{width: '550px'}}></img>
        </ul>
        <h3><strong>Related Work/Research:</strong></h3>
        <ul>
          <li>Naruto Fighting Game Using Real-Time-Gesture-Recognition</li>
          <ul>
            <li><a href="https://medium.com/khaiqn/a-naruto-fighting-game-using-real-time-gesture-recognition-1b978a69eeb9" target="_blank" rel="noopener">https://medium.com/khaiqn/a-naruto-fighting-game-using-real-time-gesture-recognition-1b978a69eeb9</a></li>
            <li>Khai Nguyen proposed using both a Microsoft Kinect and a Leap Motion hand tracking device to feed hand gesture data into an AI image classifier to recognize gestures. This would be developed as a mod for the game <em>Naruto Ultimate Ninja Heroes </em>to add hand gestures as an alternative control type.</li>
            <li>His method would allow for 10 gestures to be recognized per second, which he believes would be more than enough for even the fastest potential user.</li>
            <li>Using a more simplified system of hand gesture recognition, with only an Oculus Quest 2 and Unity&rsquo;s built in gesture and pose system, I may not be able to implement gesture recognition with the same speed or precision, but being dealing occlusion and gesture complexity using the simpler system of the Quest 2 will be a different and equally interesting challenge</li>
          </ul>
        </ul>
        <li><strong>Potential Issues:</strong></li>
        <ul>
          <li>All of the hand seals from naruto rely on both hands making contact with each other, many with one hand occluding the other. Occlusion is a weak-point for Oculus Quest 2 hand tracking, and some considerations may need to be made in order to avoid these issues.</li>
        <ul>
          <li>One possible solution is focusing on single hand gestures/poses instead.</li>
          <li>Another is to allow approximations of poses, ie. recognizing a gesture when both hands are in the proper pose and they are within a specific proximity to each other.</li>
          <li>This area will be the area with the most difficulty in implementation, and some areas of this design will need to be reconsidered as development goes on</li>
        </ul>
        <li>Frustration with gesture recognition</li>
        <ul>
          <li>Hand tracking is a difficult problem and gesture tracking is an even more difficult problem, especially when it comes to success rates. Dropouts in finger tracking remains an issue even in more recent versions of Meta&rsquo;s hand tracking solution. Making sure the user does not become frustrated by missed inputs and inaccuracy will need to be a priority.</li>
          <ul>
            <li>A solution is to have a more approximated gesture tracking system that allows for a greater range of error.</li>
            <li>A solution that can be combined with the previous would be to include UI and sound notifications to the user when a gesture is recognized, and which gesture it was recognized as. This way, users will at least know how the system is interpreting their movements and use that to accommodate their gestures and poses.</li>
          </ul>
        </ul>
      </ul>
        <li><strong>Possible future additions:</strong></li>
      <ul>
      <li>Player vs. Player Fighting</li>
      <ul>
      <li>Connect via LAN to another Oculus Quest 2 player and use gesture-based attacks against each other one-on-one</li>
      <li>Advanced movement system via gestures to allow players to dodge attacks and re-position themselves in a fighting arena</li>
      <li>Randomized arenas for more replayability</li>
      </ul>
      <li>Player vs. Environment Fighting</li>
      <ul>
      <li>Add enemy AI that can use the same abilities as the player, pitting them against groups of AI fighters</li>
      <li>Similarly randomized fighting</li>
      </ul>
      </ul>
      </ul>
      <h2><strong>Development Plan (Layers):</strong></h2>
      <ul>
      <li>Hand tracking setup in Unity with simple UI navigation gestures (Complete 11/3)</li>
      <ul>
      <li>Basic menu UI will allow the player to enter a testing/training area where they can try out different gestures and see completed gestures relayed in a &ldquo;Previous Gestures&rdquo; display above the testing area.</li>
      <li>This layer will provide the framework for later layers.</li>
      </ul>
      <li>All required hand gestures completed and recognized. Gesture strings are recognized and relayed to the player (Complete 11/17)</li>
      <ul>
      <li>9 naruto hand gestures (or approximated equivalents) will be recognized.</li>
      <ul>
      <li>Serpent, Ram, Monkey, Boar, Horse, Tiger, Ox, Hare, Serpent</li>
      </ul>
      <li>The string of previously-recognized gestures will be displayed to the player in the testing area (Up to 6 previous gestures)</li>
      </ul>
      <li>Stringed-gestures allow player to cast spells (Complete 11/24-12/1)</li>
      <ul>
      <li>At least 3 Spells available with particle effects and sound.</li>
      <ul>
      <li>Fireball</li>
      <ul>
      <li>Serpent, Ram, Monkey, Boar, Horse, Tiger</li>
      <li>Cast a fireball from the hand by pointing and grabbing after completing the gesture string</li>
      </ul>
      <li>Lightning bolt</li>
      <ul>
      <li>Ox, Hare, Monkey</li>
      <li>Cast a lighting bolt from the hand by pointing and grabbing after completing the gesture string</li>
      </ul>
      <li>Clone</li>
      <ul>
      <li>Ram, Serpent, Tiger</li>
      <li>Create a training dummy at a location by pointing and grabbing after completing the gesture string</li>
      </ul>
      </ul>
      </ul>
      <li>Combat arena with training dummies (Possibly Complete 12/11)</li>
      <ul>
      <li>The training/testing area will be textured and modeled into a combat arena with training dummies to use spells on. Spell collision and effects will be applied to the dummies.</li>
      <li>Possible Extra Feature: Time attack mode</li>
      <ul>
      <li>String together as many spells attacks as possible on a training dummy before the time limit expires.</li>
      <li>When time limit expires, the score will be displayed above the training area with fanfare and music.</li>
      </ul>
      <li><span style={{textDecoration: 'underline'}}>Note:</span> This prototype&rsquo;s focus will mainly be on hand gesture tracking. If implementation of the required gestures and gesture-strings takes longer than expected, it is possible that this layer of development will not be completed. In that case, the final environment will be the initial testing environment, with the user able to learn and test the different gestures and strings.</li>
      </ul>
      </ul>
    </div>
  );
}

export default App;
