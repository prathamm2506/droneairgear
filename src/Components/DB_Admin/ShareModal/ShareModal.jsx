import { Modal, useMantineTheme } from "@mantine/core";

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();



  return (

    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    <form className="infoForm">
    <h3>Your info</h3>

    <div>
      <input
        type="text"
        className="infoInput"
        name="Post Name"
        placeholder="Post Name"
        required
      />

      <input
        type="text"
        className="infoInput"
        name="Company Name"
        placeholder="Company Name"
        required
      />
    </div>

    <div>
      <textarea
        className="infoInput"
        name="worksAT"
        placeholder="Company Description"
        required
        cols="10" rows="10"
      />
    </div>

    <div>
      <input
        type="text"
        className="infoInput"
        name="livesIN"
        placeholder="Enter Mode"
        required
      />

      <input
        type="text"
        className="infoInput"
        name="Country"
        placeholder="Duration (in Days)"
        required
      />
    </div>

    <div>
      <input
        type="text"
        className="infoInput"
        placeholder="RelationShip Status"
        required
      />
    </div>


    <div style={{margin:"1rem 0 0 0 "}}>
        Profile Image 
        <input type="file" name='profileImg' style={{width: '60%'}}/>
      </div>
      <div style={{margin:"-1rem 0 0 0 "}} >
        Cover Image
        <input type="file" name="coverImg" style={{width: '60%'}}/>
    </div>

    <button className="indbutton infoButton">Update</button>
  </form>
    </Modal>
  );
}

export default ShareModal;