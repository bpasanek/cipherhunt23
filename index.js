const express = require("express");
const { google } = require("googleapis");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"), express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1J56LN9yEn1nWDfEUyLAW8UrSO4_2xHR-G-GY2EoUbcM";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Leaderboard",
  });
  const teamArr = getRows?.data?.values?.map((row, idx) => row[0]).slice(1);
  const dashTeamArr = teamArr?.map((team) => {
    return team?.replace(" ", "-");
  });
  const scoreArr = getRows?.data?.values?.map((row, idx) => row[1]).slice(1);
  scoreFiltered = scoreArr.filter((score) => score != undefined);
  dashFiltered = dashTeamArr.filter((team) => team != undefined);
  res.render("index", { teamArr: dashFiltered, scoreArr: scoreFiltered });
});

app.listen(process.env.PORT || 3000, () => console.log("running"));
