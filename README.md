# dataControl <!-- first-level header -->
***
The project helps to keep records and process information in multi-user mode.
1. On the main page, a form with a password:
<p align="center">
	<img src="photo\password.png" alt="Form photo">
</p>

If you fill in the password correctly, go to the data management page, otherwise an error message will be displayed on the page. The difference between the input of the supervisor and the master in the html structure of the dataControl.php page.

2. The dataControl.php page looks like this:
<p align="center">
	<img src="photo\informationManagementPage.png" alt="information management page photo">
</p>
Information management is performed in multi-user mode. The data file is located on the server and it is the same for all users. Each of the users in the file dataControl.js the data is checked every second(setInterval).

```javascript
    setInterval(() => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'php/changeAndNowF.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
  // in this function, convert data from the server
    }
    xhr.send();
  }, 1000);
```

3. The app has a menu, where you can make settings.
<p align="center">
	<img src="photo\settingsMenu.png" alt="settings menu photo">
</p>
Сhanging the (progress bar) styles is done via date attributes:

* HTML:

`<input type="range" name="sound" id="sound" data-selector="2" value="0" min="0" max="100" step="1"/>`

* CSS:

```css
	-webkit-appearance: none;
    input[type=range][data-selector="2"]::-webkit-slider-thumb {
      background-image: linear-gradient(45deg, transparent 30%, #a22f53 30% 30%, transparent 45%),
      linear-gradient(135deg, transparent 30%, #a22f53 30% 30%, transparent 45%);
      background-size: 30px 30px;
      background-position: 4px -7px, -3px 1px;
      height: 13.4px;
      width: 20px;
      cursor: pointer;
      margin-top: -14px;
      transition-duration: 1s;
}
```

More in the app is:

* AJAX technology
* CSS and JS animations
* Log in with a password
* Processing data on the server
* Adaptive design
* Bookmark URL by the GET method
