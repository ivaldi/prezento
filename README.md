Prezento
========
<h2>Getting Started</h2>
<p>With prezento you can show your web designs in a new, interactive way. Show your visitors that you've created a responsive design, choose the device the design should be showcased on and you're set. Here is how:</p>

<pre>
    <code>
&lt;!-- include jQuery -->
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js">&lt;/script>

&lt;!-- include prezento -->
&lt;script src="http://path/to/your/copy/of/jquery.prezento.js">&lt;/script>

&lt;script>
    $('.prezento-holder').prezento({
        //see below for settings
    });
&lt;/script>

...

&lt;!-- declare a prezento placeholder-->
&lt;div class="prezento-holder">&lt;/div>
	</code>
</pre>

<h2>Usage</h2>
<p>You need to declare at least one device in your plugin settings, if you forget to do so you will see an error message with a link, pointing to this readme.</p>
<pre>
<code>
&lt;script>
    $('.prezento-holder').prezento({
      devices: [{
        name: 'imac',
        deviceImageSRC: 'imac.png',
        xLeftTop: 186,
        yLeftTop: 111,
        xRightBottom: 2106,
        yRightBottom: 1261,
        breakpoint: 1024,
        bgImgSrc : 'your-web-design.jpg',
        bgTransitionDuration: '8s'
      },{
        name: 'ipad',
        deviceImageSRC: 'ipad.png',
        xLeftTop: 112,
        yLeftTop: 110,
        xRightBottom: 890,
        yRightBottom: 1144,
        breakpoint: 480,
        bgImgSrc : 'your-web-design-for-tablet.jpg',
        bgTransitionDuration: '4s'
      },{
        name: 'iphone',
        deviceImageSRC: 'iphone.png',
        xLeftTop: 42,
        yLeftTop: 135,
        xRightBottom: 439,
        yRightBottom: 829,
        breakpoint: 0,
        bgImgSrc : 'your-web-design-for-mobile.jpg',
        bgTransitionDuration: '2s'
      }], 
      responsive: 'window'
    });
&lt;/script>
</code>
</pre>

<h2>Options</h2>
<table>
  <tbody>
      <tr>
          <td><strong>Name</strong></td>
          <td colspan="3"><strong>Options</strong></td>
      </tr>
      <tr>
          <td>devices[ ]</td>
          <td colspan="3">
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Type</th>
                          <th>Description</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>name</td>
                          <td>string</td>
                          <td>Give a unique name to this device, usefull when you want to add controls to let the user change the device (see commands)</td>
                      </tr>
                      <tr>
                          <td>deviceImageSRC</td>
                          <td>string</td>
                          <td>Source of the image of the device</td>
                      </tr>
                      <tr>
                          <td>xLeftTop</td>
                          <td>int</td>
                          <td>X Coordinate of the left top position of the screen</td>
                      </tr>
                      <tr>
                          <td>yLeftTop</td>
                          <td>int</td>
                          <td>Y Coordinate of the left top position of the screen</td>
                      </tr>
                      <tr>
                          <td>xRightBottom</td>
                          <td>int</td>
                          <td>X Coordinate of the right bottom position of the screen</td>
                      </tr>
                      <tr>
                          <td>yRightBottom</td>
                          <td>int</td>
                          <td>Y Coordinate of the right bottom position of the screen</td>
                      </tr>
                      <tr>
                          <td>breakpoint</td>
                          <td>int</td>
                          <td>Screenwidth in pixels. Mobile first, so all screensizes bigger than given value will use this device.</td>
                      </tr>
                      <tr>
                          <td>bgImgSrc</td>
                          <td>string</td>
                          <td>Source of your webdesign you want to use with this device.</td>
                      </tr>
                      <tr>
                          <td>bgTransitionDuration</td>
                          <td>string</td>
                          <td>The duration of the animation in seconds.</td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
      <tr>
          <td><strong>Name</strong></td>
          <td><strong>Type</strong></td>
          <td><strong>Default</strong></td>
          <td><strong>Description</strong></td>
      </tr>
      <tr>
          <td>debug</td>
          <td>boolean</td>
          <td>false</td>
          <td>controls if you want to have some developer output in your console. (It shows the contents of all devices you added)</td>
      </tr>
      <tr>
          <td>deviceHolder</td>
          <td>string</td>
          <td>'deviceholder'</td>
          <td>classname of the device which will be used by the script. A new div will be created inside the showcase holder.</td>
      </tr>
      <tr>
          <td>deviceScreen</td>
          <td>string</td>
          <td>'devicescreen'</td>
          <td>classname of the devicescreen which will be used by the script. A new div will be created inside the showcase holder.</td>
      </tr>
      <tr>
          <td>startAfterScroll</td>
          <td>boolean</td>
          <td>false</td>
          <td>If the scrolling of the screen should be triggered based on the position of the users viewport. Could be handy if you have a large page and your prezento is below the viewport onload.</td>
      </tr>
      <tr>
          <td>distanceTop</td>
          <td>float or string</td>
          <td>0.25 or '25%'</td>
          <td>If startAfterScroll is true, what should be the distance from the top of the browser to the div holder. Either a value between 0 - 1 or a percentage between 0% - 100%</td>
      </tr>
      <tr>
          <td>resetWhenBelow</td>
          <td>boolean</td>
          <td>false</td>
          <td>If the animation should reset itself when it is out of the viewport</td>
      </tr>
      <tr>
          <td>responsive</td>
          <td>string</td>
          <td>'window'</td>
          <td>If the resize event should be triggered, to show your responsive layout. Can be 'window' (breakpoints based on window size), 'parent' (breakpoints based on parent container size), or 'none' (no resize will happen).</td>
      </tr>
      <tr>
          <td>autoPlay</td>
          <td>boolean</td>
          <td>true</td>
          <td>If the animation should start directly after pageload.</td>
      </tr>
  </tbody>
</table>
<h2>Commands</h2>
<table>
    <thead class="thead">
        <tr>
            <th width="20%;">Command</th>
            <th width="30%;">Description</th>
            <th>Example Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>play()</td>
            <td>start the animation</td>
            <td>
                <pre class="text-small">
                    <code>
$('.prezento-holder').prezento.play();</code>
                </pre>
            </td>
        </tr>
        <tr>
            <td>pause()</td>
            <td>pause the animation</td>
            <td>
                <pre class="text-small">
                    <code>
$('.prezento-holder').prezento.pause();</code>
                </pre>
            </td>
        </tr>
        <tr>
            <td>resume()</td>
            <td>resume the animation</td>
            <td>
                <pre class="text-small">
                    <code>
$('.prezento-holder').prezento.resume();</code>
                </pre>
            </td>
        </tr>
        <tr>
            <td>reset()</td>
            <td>reset the animation</td>
            <td>
                <pre class="text-small">
                    <code>
$('.prezento-holder').prezento.reset();</code>
                </pre>
            </td>
        </tr>
        <tr>
            <td>changeDevice(name)</td>
            <td>Change the device your design is presented on based on the name you have entered for the device</td>
            <td>
                <pre class="text-small">
                    <code>
$('.prezento-holder').prezento.changeDevice('imac');</code>
                </pre>
            </td>
        </tr>
    </tbody>
</table> 


<h2>Browser Support</h2>
<table>
    <tbody>
        <tr>
            <td><img src="https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png" alt="Chrome"/></td>
            <td><img src="https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png" alt="Firefox"/></td>
            <td><img src="https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png" alt="Safari"/></td>
            <td><img src="https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png" alt="Opera"/></td>
            <td><img src="https://raw.github.com/alrra/browser-logos/master/internet-explorer-tile/internet-explorer-tile_48x48.png" alt="IE"/></td>
            <td><img src="https://raw.github.com/alrra/browser-logos/master/safari-ios/safari-ios_48x48.png" alt="iOS"/></td>
        </tr>
        <tr>
            <td>&#x2713;</td>
            <td>&#x2713; 5+</td>
            <td>&#x2713; 4+</td>
            <td>&#x2713; 12+</td>
            <td>&#x2713; 10+</td>
            <td>&#x2713;</td>
        </tr>
    </tbody>
</table>


<h2>Copyright and License</h2>
<p>Copyright &copy; <?php echo date("Y"); ?> Ivaldi (<a href="http://ivaldi.nl">http://ivaldi.nl</a>)<br/>Prezento is licensed under the GNU Affero General Public License Version 3.</p>