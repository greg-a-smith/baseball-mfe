import Button from "uiComponents/Button";
import Table from "uiComponents/Table";
import "./RosterPage.css";

const teamRoster = [
  { number: 1, name: "Bugs Bunny", pos: "P, OF", bats: "Right", throws: "Right" },
  { number: 2, name: "Daffy Duck", pos: "3B", bats: "Left", throws: "Right" },
  { number: 3, name: "Porky Pig", pos: "C, 1B", bats: "Right", throws: "Right" },
  { number: 4, name: "Road Runner", pos: "2B, SS", bats: "Right", throws: "Right" },
  { number: 5, name: "Wiley Coyote", pos: "1B, 3B", bats: "Right", throws: "Right" },
  { number: 6, name: "Elmer Fudd", pos: "OF", bats: "Left", throws: "Left" },
  { number: 7, name: "Marvin Martian", pos: "P, C", bats: "Right", throws: "Right" },
  { number: 8, name: "Mickey Mouse", pos: "SS, 3B", bats: "Left", throws: "Right" },
  { number: 9, name: "Donald Duck", pos: "P, SS, OF", bats: "Right", throws: "Right" },
  { number: 10, name: "Minnie Mouse", pos: "1B", bats: "Left", throws: "Left" },
  { number: 11, name: "Yosemite Sam", pos: "P, OF", bats: "Right", throws: "Right" },
  { number: 12, name: "Babs Bunny", pos: "2B", bats: "Right", throws: "Right" },
];

const RosterPage = () => {
  const columnDefs = [
    { header: "Number", propertyName: "number" },
    { header: "Name", propertyName: "name" },
    { header: "Position", propertyName: "pos", align: "center" },
    { header: "Bats", propertyName: "bats", align: "center" },
    { header: "Throws", propertyName: "throws", align: "center" },
  ];

  return (
    <>
    <div className="app-header">
      Team Pages
    </div>
    <div className="app-body">
      <h1>Team Roster</h1>
      <Button>
        Subscribe
      </Button>
      <br />
      <br />
      <Table
        columns={columnDefs}
        data={teamRoster}
      />
    </div>
    </>
  );
};

export default RosterPage;
