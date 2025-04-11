import { FormGroup, Stack, Button } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderItem, { HeaderItemProps } from '../../molecules/HeaderItem';
import Checkbox from '../../atoms/Checkbox';
import AutoSendNoticeItem, { AutoSendNoticeItemProps } from '../../molecules/AutoSendNoticeItem';
import MailSuccessItem from '../../molecules/MailSuccessItem';

import { CandidateGenearalInfoProps } from '../CandidateInfo';
import Modal from '../../molecules/Modal';
import SuccessGIF from '../../../assets/gifs/success.gif';
import { checkboxLabels } from '../../constants/objects';

export interface CandidateInfoProps {
  headerProps: HeaderItemProps;
  autoSendNoticeItemProps: AutoSendNoticeItemProps;
}

const MailComponent = (props: CandidateInfoProps) => {
  const { candId } = useParams();
  const navigate = useNavigate();
  const [candidateInfo, setCandidateInfo] = useState<CandidateGenearalInfoProps>(
    {} as CandidateGenearalInfoProps
  );
  const [checks, setChecks] = useState([false, false, false]);
  const [days, setDays] = useState<string>('5');
  const [isNoticeClicked, setIsNoticeClicked] = useState(false);
  const [isNoticeSubmitted, setIsNoticeSubmitted] = useState(false);

  const handleNoticeButton = () => {
    setIsNoticeClicked(true);
  };

  const handleChecks = (index: number) => {
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/candidate-info/${candId}`)
      .then((res) => {
        setCandidateInfo(res.data);
      })
      .catch((err) => alert(err));
  }, [candId]);

  props.autoSendNoticeItemProps.daysTextFieldProps.onChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setDays(e.target.value);
  props.autoSendNoticeItemProps.daysTextFieldProps.value = days;
  props.autoSendNoticeItemProps.noticeButtonProps.onClick = handleNoticeButton;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
  };

  const mailReviewNode = (
    <Stack spacing={5} sx={{ ...style }}>
      <p>From: Kyle@checkr.com</p>
      <p>To: {candidateInfo.email}</p>
      <p>Subject: Pre-Adverse action notice-Checkr-Bpo</p>
      <div>
        <p>Dear {candidateInfo.name}</p>
        <p>
          You are recently authorized checkr-bpo to obtain consumer reports and investigate consumer
          reports about you from a consumer reporting agency. The company is considering taking
          action in whole or in past on information in such reports including the following specific
          items identified in the report prepared by Checkr Inc.
        </p>
        <h3>Select the charges for the Pre-Adverse action</h3>
        <ul>
          {checks.map((isCheck, index) =>
            isCheck ? <li key={checkboxLabels[index].id}>{checkboxLabels[index].label}</li> : null
          )}
        </ul>

        <p>
          If you wish to dispute the accuracy of the information in the report direclty with the
          consumer reporting agency i.e.. the source of the information contained in the report, you
          should contact the agency directly.
        </p>
        <div>Sincerely</div>
        <div>CheckrBpo</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setIsNoticeClicked(false);
          }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setIsNoticeClicked(false);
            setIsNoticeSubmitted(true);
          }}>
          Submit Notice
        </Button>
      </div>
    </Stack>
  );

  const mailSuccessNode = (
    <MailSuccessItem
      boxProps={{
        sx: {
          ...style,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }}
      imageProps={{
        src: SuccessGIF,
        alt: 'Success GIF'
      }}
      messageProps={{
        content: 'Pre-Adverse Action notice successfully sent'
      }}
    />
  );
  return (
    <Stack spacing={5}>
      <HeaderItem {...props.headerProps} />
      <Stack spacing={5}>
        <p>From: Kyle@checkr.com</p>
        <p>To: {candidateInfo.email}</p>
        <p>Subject: Pre-Adverse action notice-Checkr-Bpo</p>
        <div>
          <p>Dear {candidateInfo.name}</p>
          <p>
            You are recently authorized checkr-bpo to obtain consumer reports and investigate
            consumer reports about you from a consumer reporting agency. The company is considering
            taking action in whole or in past on information in such reports including the following
            specific items identified in the report prepared by Checkr Inc.
          </p>
          <h3>Select the charges for the Pre-Adverse action</h3>
          <FormGroup>
            {checkboxLabels.map((labelObj, index) => (
              <Checkbox
                key={labelObj.id}
                control={<CheckBox />}
                label={labelObj.label}
                onChange={() => handleChecks(index)}
                checked={checks[index]}
              />
            ))}
          </FormGroup>
          <p>
            If you wish to dispute the accuracy of the information in the report direclty with the
            consumer reporting agency i.e.. the source of the information contained in the report,
            you should contact the agency directly.
          </p>
          <div>Sincerely</div>
          <div>CheckrBpo</div>
        </div>
      </Stack>
      <AutoSendNoticeItem {...props.autoSendNoticeItemProps} />
      <Modal
        open={isNoticeClicked}
        onClose={() => {
          setIsNoticeClicked(false);
        }}>
        {mailReviewNode}
      </Modal>
      <Modal
        open={isNoticeSubmitted}
        onClose={() => {
          setIsNoticeSubmitted(false);
          navigate('/candidates');
        }}>
        {mailSuccessNode}
      </Modal>
    </Stack>
  );
};

export default MailComponent;
