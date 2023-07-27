import { createContext, useContext, useEffect, useState } from "react"
import { initializeApp } from 'firebase/app';
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getAuth, onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup } from 'firebase/auth'

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'



const FirebaseContext = createContext(null);
// const firebaseConfig = {
//     apiKey: "AIzaSyDYVmJS-ln3d87aL6SEJNTUZzKo7bJ6iRg",
//     authDomain: "tooltips-24898.firebaseapp.com",
//     projectId: "tooltips-24898",
//     storageBucket: "tooltips-24898.appspot.com",
//     messagingSenderId: "411630853334",
//     appId: "1:411630853334:web:4adc7409a8b7bd3718bd77",
//     measurementId: "G-QC0GHMHDMD"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyCaqqHM-cVvSEMU7f6sIZJz-GBT8AoEok0",
    authDomain: "drone-b9888.firebaseapp.com",
    projectId: "drone-b9888",
    storageBucket: "drone-b9888.appspot.com",
    messagingSenderId: "838030468344",
    appId: "1:838030468344:web:c8fb6fef2db9caf21b070d",
    measurementId: "G-MYBWL7FC3N"
  };
export const useFirebase = () => useContext(FirebaseContext);       

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const firestore = getFirestore(firebaseApp);
export const db = firestore;
const storage = getStorage(firebaseApp);



export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
    //   console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};


const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);


    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        });
    },[]);

    const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password);


    const signinUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);


    const handleCreateUser = async (email,password) => {
        await addDoc(collection(firestore,'users'),{
            email,
            password,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,

        })
    }

    const handleCreateNewCourse = async (name,category, duration, description, language, level, in_name, in_discrip, thumbnail, price, ch1, ch1_video, ch1_dis) => {

        const thumbRef = ref(storage, `uploads/thumb_images/${thumbnail.name}`);
        const uploadThumb = await uploadBytes(thumbRef, thumbnail);

        const ch1Ref = ref(storage, `chapters/${ch1_video.name}`);
        const uploadCh1 = await uploadBytes(ch1Ref, ch1_video);

       

        

        await addDoc(collection(firestore, 'courses'),{
            name, 
            category,
            duration, 
            description, 
            language, 
            level, 
            in_name, 
            in_discrip, 
            price,
            ch1,
            ch1_dis,

            thumbnailURL: uploadThumb.ref.fullPath,
            ch1URL: uploadCh1.ref.fullPath,
           

            
            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            
        });

    };


    const handleCreateNewInternship = async (post,category, company, com_dis, mode,  duration, stipend, location, date, post_dis, req_elg, com_link,
        ) => {
        await addDoc(collection(firestore, 'internships'),{
            post, 
            category,
            company, 
            com_dis, 
            mode,  
            duration, 
            stipend, 
            location, 
            date, 
            post_dis, 
            req_elg,
            com_link,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    };


    const handleAddComponents = async (name,type, sup_Name, description, location, thumbnail, price) => {

        const thumbRef = ref(storage, `orders/thumb_images/${thumbnail.name}`);
        
        const uploadThumb = await uploadBytes(thumbRef, thumbnail);

       

        await addDoc(collection(firestore, 'components'),{
            name, 
            type,
            sup_Name, 
            description, 
            location,  
            price,
            thumbnailURL: uploadThumb.ref.fullPath,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          
           
            
        });

    };
    const handleJoinMentor = async (f_name,skill, email, mobile, state, city, com_name, com_pos,  expertise, photo) => {
        const photoRef =  ref(storage, `mentor/profile_photo/${photo.name}`);

        const uploaPhoto = await uploadBytes(photoRef, photo);

        await addDoc(collection(firestore, 'registerd_mentor'),{
            f_name,  
            skill,
            email,
            mobile,  
            state, 
            city, 
            com_name, 
            com_pos, 
            expertise, 
            photURL: uploaPhoto.ref.fullPath,
            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    };

    const handleJoinIndustry = async (name,email, number, com_id, logo, city, state) => {
        const logoRef = ref(storage, `industry/logos/${logo.name}`);

        const uploadLogo = await uploadBytes(logoRef, logo);
        await addDoc(collection(firestore, 'registerd_industry'),{
            name,
            email, 
            number, 
            com_id, 
            city, 
            state,

            logoURL: uploadLogo.ref.fullPath,
            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    };


    const handleJoinStartup = async (org_id, name, fon_name, org_email, city, state, structure, stage, size, revenue, contact, goal, raised, no_investor, valuation,over_title, over_dis, graph, certificate, logo) => {
        const cerRef = ref(storage, `startup/certificates/${certificate.name}`);

        const uploadCertificate = await uploadBytes(cerRef, certificate);


        const logoRef = ref(storage, `startup/Logo/${logo.name}`);

        const uploadLogo = await uploadBytes(logoRef, logo);

        const graphRef = ref(storage, `startup/Revenue Graphs/${graph.name}`);

        const uploadGraph = await uploadBytes(graphRef,graph);


        await addDoc(collection(firestore, 'registerd_startups'), {
            org_id, 
            name, 
            fon_name, 
            org_email, 
            city, 
            state, 
            structure, 
            stage, 
            size, 
            revenue, 
            contact, 
            goal, 
            raised, 
            no_investor, 
            valuation,
            over_title,
            over_dis,


            certificateURL: uploadCertificate.ref.fullPath,
            logoURL: uploadLogo.ref.fullPath,
            graphURL: uploadGraph.ref.fullPath,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    };

    const handleJoinUniversity = async(institute_id, name, ins_web, ins_email, ins_logo, ins_city, ins_state, aicte_app, ins_contact) => {
        const logoRef = ref(storage, `University/logo/${ins_logo.name}`);

        const uploadLogo = await uploadBytes(logoRef, ins_logo);

        await addDoc(collection(firestore, "registerd_university"), {
            institute_id,
            name,
            ins_web,
            ins_email,
            ins_city,
            ins_state,
            aicte_app,
            ins_contact,

            logoURL: uploadLogo.ref.fullPath,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    };

    const handleJoinInvestor = async(name, contact, email) => {
        await addDoc(collection(firestore,"registerd_investors"),{
            name,
            contact,
            email,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    };

    const handleJoinSeller = async(shop, name, contact, email, city, state, address) =>{
        await addDoc(collection(firestore,"registerd_seller"),{
            shop, 
            name, 
            contact, 
            email, 
            city, 
            state, 
            address,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    }





    // ----------------------Coourses ----------------------


    const listAllCourses = () => {
        return getDocs(collection(firestore, "courses"));
    };

    const MapCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("category", "==", "Map"));
        const result = await getDocs(q);
        return result;
    };
    const DesignCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("category", "==", "Design"));
        const result = await getDocs(q);
        return result;
    };
    const PilotCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("category", "==", "Pilot"));
        const result = await getDocs(q);
        return result;
    };
    const EngineeringCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("category", "==", "Engineering"));
        const result = await getDocs(q);
        return result;
    };
    const OtherCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where('category', 'not-in', ['Pilot', 'Design','Map','Engineering']));
        const result = await getDocs(q);
        return result;
    };
    const begCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("level", "==", "beginner"));
        const result = await getDocs(q);
        return result;
    };
    const medCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("level", "==", "medium"));
        const result = await getDocs(q);
        return result;
    };
    const advCourses = async() => {
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("category", "==", "advanced"));
        const result = await getDocs(q);
        return result;
    };







    // ----------------------internship ----------------------


    const listAllInternship = () => {
        return getDocs(collection(firestore, "internships"));
    };

    const flight = async() => {
        const collectionRef = collection(firestore, 'internships');
        const q = query(collectionRef, where("category","==", "flight"));
        const result = await getDocs(q);
        return result;
    };
    const manufracture = async() => {
        const collectionRef = collection(firestore, 'internships');
        const q = query(collectionRef, where("category", "==", "manufracture"));
        const result = await getDocs(q);
        return result;
    };
    const design = async() => {
        const collectionRef = collection(firestore, 'internships');
        const q = query(collectionRef, where("category", "==", "design"));
        const result = await getDocs(q);
        return result;
    };
    const survey = async() => {
        const collectionRef = collection(firestore, 'internships');
        const q = query(collectionRef, where("category", "==", "survey"));
        const result = await getDocs(q);
        return result;
    };
    const onlineInternship = async() => {
        const collectionRef = collection(firestore, 'internships');
        const q = query(collectionRef, where("mode", "==", "online"));
        const result = await getDocs(q);
        return result;
    };
    const offlineInternship = async() => {
        const collectionRef = collection(firestore, 'internships');
        const q = query(collectionRef, where("mode", "==", "offline"));
        const result = await getDocs(q);
        return result;
    };

    





    // ----------------------Components ----------------------



    const listAllcomponents = () => {
        return getDocs(collection(firestore, "components"));
    };

    const DevBoard = async() => {
        const collectionRef = collection(firestore, 'components');
        const q = query(collectionRef, where("type", "==", "Development Boards"));
        const result = await getDocs(q);
        return result;
    };
    const Sensors = async() => {
        const collectionRef = collection(firestore, 'components');
        const q = query(collectionRef, where("type", "==", "Sensors"));
        const result = await getDocs(q);
        return result;
    };
    const Accessories = async() => {
        const collectionRef = collection(firestore, 'components');
        const q = query(collectionRef, where("type", "==", "Accessories and Wires"));
        const result = await getDocs(q);
        return result;
    };
    const Others = async() => {
        const collectionRef = collection(firestore, 'components');
        const q = query(collectionRef, where("type", 'not-in', ['Sensors', 'Development Boards','Accessories and Wires']));
        const result = await getDocs(q);
        return result;
    };
    const zero = async() => {
        const collectionRef = collection(firestore, 'components');
        const q = query(collectionRef, where("price", "<", 0) && where("price", ">", 500));
        const result = await getDocs(q);
        return result;
    };
    const hundred = async() => {
        const collectionRef = collection(firestore, 'components');
        const q = query(collectionRef, where("price", ">", 500) && where("price", "<", 1000));
        const result = await getDocs(q);
        return result;
    };
    const thousand = async() => {
        const collectionRef = collection(firestore, 'components');
        const q = query(collectionRef, where("price", ">",1000));
        const result = await getDocs(q);
        return result;
    };



// --------------------------Other-------------------



    const listAllMentors = () => {
        return getDocs(collection(firestore, "registerd_mentor"));
    }

    const DesignMentor = async() => {
        const collectionRef = collection(firestore, 'registerd_mentor');
        const q = query(collectionRef, where("skill", "==", "engineer"));
        const result = await getDocs(q);
        return result;
    };
    const PilotMentor = async() => {
        const collectionRef = collection(firestore, 'registerd_mentor');
        const q = query(collectionRef, where("skill", "==", "pilot"));
        const result = await getDocs(q);
        return result;
    };
    const DeveloperMentor = async() => {
        const collectionRef = collection(firestore, 'registerd_mentor');
        const q = query(collectionRef, where("skill", "==", "developer "));
        const result = await getDocs(q);
        return result;
    };





    const listAllIndustry = () => {
        return getDocs(collection(firestore, "registerd_industry"));
    }

    const listAllStartups = () => {
        return getDocs(collection(firestore, "registerd_startups"));
    }

    const listAllUniversity = () => {
        return getDocs(collection(firestore, "registerd_university"));
    }

    const listAllInvestors = () => {
        return getDocs(collection(firestore, "registerd_investors"));
    }

    const listAllSellers = () => {
        return getDocs(collection(firestore, "registerd_seller"));
    }

    const getInternshipById = async (id) => {
        const docRef = doc(firestore, 'internships', id);
        const result = await getDoc(docRef);
        return result;
    }

    const getCourseById = async (id) => {
        const docRef = doc(firestore, 'courses', id);
        const result = await getDoc(docRef);
        return result;
    }

    const deleteCourse = async (id) => {
        const docRef = doc(firestore, 'courses', id);
        const result = await deleteDoc(docRef);
        return result;
    }

    const deleteInternship = async (id) => {
        const docRef = doc(firestore, 'internships', id);
        const result = await deleteDoc(docRef);
        return result;
    }

    const deleteProduct = async (id) => {
        const docRef = doc(firestore, 'components', id);
        const result = await deleteDoc(docRef);
        return result;
    }

    const getStartupById = async (id) => {
        const docRef = doc(firestore, 'registerd_startups', id);
        const result = await getDoc(docRef);
        return result;
    }

    const getOrderById = async (id) => {
        const docRef = doc(firestore, 'components', id);
        const result = await getDoc(docRef);
        return result;
    }



    const fecthMentorData = async (userID) => {

        const collectionRef = collection(firestore, 'registerd_mentor');
        const q = query(collectionRef, where("userID", "==", userID));

        const result = await getDocs(q);

        return result;

    }

    const fecthMyCourses = async (userID) => {
        
        const collectionRef = collection(firestore, 'courses');
        const q = query(collectionRef, where("userID","==", userID));

        const result = await getDocs(q);

        return result;

    }

    const fecthMyInternships = async (userID) => {
        
        const collectionRef = collection(firestore, 'internships');

        const q = query(collectionRef, where("userID","==", userID));

        const result = await getDocs(q);

        return result;

    }

    const fecthMyProducts = async(userID) => {
        const collectionRef = collection(firestore, "components");

        const q = query(collectionRef, where("userID", "==", userID));

        const result = await getDocs(q);

        return result;
    }

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path));
    };


    const placeChapters = async(courseId, title, video, description) => {
        const collectionRef = collection(firestore, 'courses', courseId, 'chapters');

        const videoRef = ref(storage, `chapters/${video.name}`);

        const uploadVideo = await uploadBytes(videoRef, video);

        const result = await addDoc(collectionRef, {
            title,
            description,
            videoURL: uploadVideo.ref.fullPath,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,

        });
        return result;
    };

    

    const getChapters = async(courseId) => {
        const collectionRef = collection(firestore, 'courses', courseId, 'chapters');

        const result = await getDocs(collectionRef);

        return result;
    }

    const getOrders = async(courseId) => {
        const collectionRef = collection(firestore, 'courses', courseId, 'chapters');
        const result = await getDocs(collectionRef);
        return result;
    }


    const placeIntern = async(internshipId, name, contact, email, resume, why) =>{
        const collectionRef = collection(firestore, 'internships', internshipId, 'applicants');

        const resumeRef = ref(storage, `internship/resume/${resume.name}`);

        const uploadResume = await uploadBytes(resumeRef, resume);

        const result = await addDoc(collectionRef, {
            name,
            contact,
            email,
            why,

            resumeURL: uploadResume.ref.fullPath,

            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,

        });
        return result;
    };

    const getIntern = async(internshipId) =>{
        const collectionRef = collection(firestore, 'internships', internshipId, 'applicants');

        const result = await getDocs(collectionRef);
        return result;
    }


    const placeToCourse = async(courseId) => {
        const collectionRef = collection(firestore, 'courses', courseId, 'students');
        const result = await addDoc(collectionRef, {
            userID: user.uid,
            useEmail: user.email,
            displayName: user.displayName, 
            photoURL: user.photoURL,
        });
        return result;

    };

    const getToCourse = async(courseId) => {
        const collectionRef = collection(firestore, 'courses', courseId, 'students');
        const result = await getDocs(collectionRef);
        return result;
    }

    // const fecthMyEnrolls = async(userID) => {
    //     const collectionRef = collection(firestore, 'courses', courseId, 'students');
    //     const q = query(collectionRef, where("userID" ,"==", userID));

    //     const result = await getDocs(q);

    //     return result;
    // }

    const isLogedIn = user ? true : false;

    // const isMentorRegister = handleJoinMentor ? true : false;

    return(
        <FirebaseContext.Provider value={{  
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinWithGoogle,
        handleCreateNewCourse,
        listAllCourses,
        getImageURL,
        getCourseById,
        handleCreateNewInternship,
        listAllInternship,
        getInternshipById,
        handleAddComponents,
        listAllcomponents,
        fecthMyProducts,
        getOrderById,
        handleJoinMentor,
        fecthMentorData,
        fecthMyCourses,
        fecthMyInternships,
        user,
        handleCreateUser,
        handleJoinIndustry,
        listAllIndustry,
        isLogedIn,
        listAllMentors,
        placeChapters,
        getChapters,
        getOrders,
        handleJoinStartup,
        listAllStartups,
        getStartupById,
        handleJoinInvestor,
        listAllInvestors,
        handleJoinUniversity,
        listAllUniversity,
        handleJoinSeller,
        listAllSellers,
        placeIntern,
        getIntern,
        placeToCourse,
        getToCourse,
       
        deleteCourse,
        deleteInternship,
        deleteProduct,

        MapCourses,
        DesignCourses,
        PilotCourses,
        EngineeringCourses,
        OtherCourses,
        begCourses,
        medCourses,
        advCourses,

        DesignMentor,
        PilotMentor,
        DeveloperMentor,

        DevBoard,
        Sensors,
        Accessories,
        Others,
        zero,
        hundred,
        thousand,

        flight,
        manufracture,
        design,
        survey,
    
        onlineInternship,
        offlineInternship,

      }}>
            {
                props.children
            }
        </FirebaseContext.Provider>
    )
}