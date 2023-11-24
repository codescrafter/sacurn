import { AccordionDetails } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useState } from 'react';

interface BenefitAccordionProps {
  title: string;
  description: string;
  image: string;
}

export default function BenefitAccordion({ title, description, image }: BenefitAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === title}
      onChange={handleChange(title)}
      defaultExpanded={true}
      sx={{
        backgroundColor: 'transparent',
        color: 'white',
        borderRadius: '5px',
        marginBottom: '10px',
        boxShadow: 'none',
        border: 'none',
        '&:before': {
          display: 'none'
        }
      }}
    >
      <AccordionSummary
        sx={{
          padding: '0px',
          '& .MuiAccordionSummary-content': {
            display: 'block',
            padding: '0px'
          }
        }}
      >
        <Box sx={{ display: 'flex', gap: '17px' }}>
          <img src={image} alt={description} className="w-[90px] h-[71px] object-contain" />
          <Box>
            <Typography sx={{ fontSize: '20px', fontWeight: '700', lineHeight: 'normal', marginBottom: '6px' }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: '18px', lineHeight: 'normal' }}>{description}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography sx={{ color: '#FFD600', fontSize: '12px', fontWeight: 'bold' }}>
              View {expanded ? 'less' : 'more'}
            </Typography>
            {expanded ? (
              <img src="/images/products/arrow-up.svg" className="w-[12px] h-[6px] object-contain" />
            ) : (
              <img src="/images/products/arrow-down.svg" className="w-[12px] h-[6px] object-contain" />
            )}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '0' }}>
        <Typography
          sx={{
            color: '#FFD600',
            lineHeight: '24px',
            fontSize: '16px',
            fontWeight: '400',
            textIndent: '20px',
            textAlign: 'justify'
          }}
        >
          Goal 2 is about creating a world free of hunger by 2030.The global issue of hunger and food insecurity has
          shown an alarming increase since 2015, a trend exacerbated by a combination of factors including the pandemic,
          conflict, climate change, and deepening inequalities.
        </Typography>
        <Typography
          sx={{
            color: '#FFD600',
            lineHeight: '24px',
            fontSize: '16px',
            fontWeight: '400',
            textIndent: '20px',
            marginTop: '6px',
            textAlign: 'justify'
          }}
        >
          By 2022, approximately 735 million people – or 9.2% of the world’s population – found themselves in a state of
          chronic hunger – a staggering rise compared to 2019. This data underscores the severity of the situation,
          revealing a growing crisis.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
