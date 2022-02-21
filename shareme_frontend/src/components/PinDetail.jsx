import React , {useState, useEffect} from 'react'
import {MdDownloadForOffline} from 'react-icons/md';
import {Link, useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

import {client, urlFor} from '../client';
import MasonryLayout from './MasonryLayout';
import {pinDetailQuery,pinDetailMorePinQuery} from '../utils/data';
import Spinner from './Spinner';

const PinDetail = ({user}) => {
  
  const [pins, setPins] = useState(null);
  const [pinDetail, setpinDetail] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);
  const {pinId} = useParams();
  
  if(!pinDetail) return <Spinner message="Loading pin.." />

  return (
    <div>
      
    </div>
  )
}

export default PinDetail


//3:34:59---