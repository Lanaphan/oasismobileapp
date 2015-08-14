function DOMLoaded() {
	document.addEventListener("deviceready", localready, false);	
}

function localready() {
    cordova.exec(null, null, "SplashScreen", "hide", []);
	localStorage.setItem('MyFile', 'Retrieved from local storage.');
	var element = document.getElementById('info');
	element.innerHTML = localStorage.getItem('MyFile');
}

var db;

function ready() {
	cordova.exec(null, null, "SplashScreen", "hide", []);
	db = window.openDatabase("Database", "1.0", "OasisDB", 20000);
	db.transaction(populateDB, errorDB, successDB);
}

function populateDB(pdb) {
	pdb.executeSql('DROP TABLE IF EXISTS CUSTOMER');
	pdb.executeSql('CREATE TABLE IF NOT EXISTS CUSTOMER (id unique, data');
	pdb.executeSql('INSERT INTO CUSTOMER (id, data) VALUES (Lana, password');
	pdb.executeSql('INSERT INTO CUSTOMER (id, data) VALUES (Elliot, password');
}

function errorDB(err) {
	alert("There was an error. Error code: " + err.code + " Error Message" + err.message);
}

function successDB() {
	db.transaction(queryDB, errorDB);
}

function queryDB(qdb) {
	qdb.executeSql('SELECT * FROM CUSTOMER', [], querySuccess, errorDB);
}

function querySuccess(qdb, results) {
	var info = document.getElementById('info');
	var length = results.rows.length;
	for (var i = 0; i < length; i++) {
		info.innerHTML += "ID = " + results.rows.item(i).id + " Data = " + results.rows.item(i).data + "<br/>";
	}
	

}
