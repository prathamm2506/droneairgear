import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
        title="Authentication"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
      <form className="infoForm">
      <h3>Your info</h3>

      <div>
        <input
          type="text"
          className="infoInput"
          name="Course Name"
          placeholder="First Name"
        />

        <input
          type="text"
          className="infoInput"
          name="Duration"
          placeholder="Last Name"
        />
      </div>

      <div>
        <input
          type="text"
          className="infoInput"
          name="Course Language"
          placeholder="Works at"
        />
      </div>

      <div>
        <input
          type="text"
          className="infoInput"
          name="Course Level"
          placeholder="LIves in"
        />

        <input
          type="text"
          className="infoInput"
          name="Instructor Name"
          placeholder="Country"
        />
      </div>

      <div>
        <input
          type="text"
          className="infoInput"
          placeholder="RelationShip Status"
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

    </>
  );
}

export default ProfileModal