import React, { useEffect } from 'react'
import './Job.css'
import { useFirebase } from '../../../context/firebase'
import { Link, useNavigate } from 'react-router-dom';
const Job = (props) => {

	const firebase = useFirebase();

	const navigate = useNavigate();

	const remove = async() => {
		await firebase.deleteCourse(props.id);
		// return result;
		navigate('/');
	}



  return (


	<div className="jobby">
		<div className="jb-preview">
			<h6>Course</h6>
			<h2>{props.name}</h2>
			{/* <Link to={props.link}>Add More Chapters <i className="fas fa-chevron-right"></i></Link> */}
		</div>
		<div className="jb-info">
		{/* <div class="progress-container">
				<div class="progress"></div>
				<span class="progress-text">
					6/9 Challenges
				</span>
			</div> */}
			<h6>Chapter 4</h6>
			<h2>Callbacks & Closures</h2>
			<Link to={props.link} className="jb-btn">Continue</Link>
			<div className='deleteco' onClick={remove}>Delete</div>
		</div>
		<div className='job-btn'>
			<Link to={props.link} className="jb-bntcon">Continue</Link>
			<div className='deletecom' onClick={remove}>Delete</div>
		</div>
	</div>



  )
}

export default Job
