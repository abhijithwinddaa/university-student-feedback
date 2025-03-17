import { professors, Professor } from './professors';
import { subjects, Subject } from './subjects';

interface Question {
  id: string;
  text: string;
  options: string[];
  type: 'pre' | 'post';
}

// Use a Map for efficient lookup by professorId and subjectCode
const questionSets = new Map<string, Map<string, Question[]>>();

questionSets.set('prof1', new Map([
  ['MAT5001', [
    // Pre-feedback questions (15)
    { id: 'q1-mat5001-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-mat5001-prof1', text: 'Was the course material for Applied Statistics well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-mat5001-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-mat5001-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-mat5001-prof1', text: 'Would you recommend the Applied Statistics course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-mat5001-prof1', text: 'How clear were the explanations of statistical concepts?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'pre' },
    { id: 'q7-mat5001-prof1', text: 'How relevant were the examples used in the Applied Statistics course?', options: ['Very Relevant', 'Relevant', 'Somewhat Relevant', 'Not Relevant'], type: 'pre' },
    { id: 'q8-mat5001-prof1', text: 'How would you rate the pace of the Applied Statistics course?', options: ['Too Fast', 'Just Right', 'Too Slow', 'Varies'], type: 'pre' },
    { id: 'q9-mat5001-prof1', text: 'How accessible was Dr. Rajesh Kumar outside of class hours?', options: ['Very Accessible', 'Accessible', 'Somewhat Accessible', 'Not Accessible'], type: 'pre' },
    { id: 'q10-mat5001-prof1', text: 'How would you rate the quality of the assignments in Applied Statistics?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q11-mat5001-prof1', text: 'How well did the course prepare you for practical statistical analysis?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q12-mat5001-prof1', text: 'How would you rate the usefulness of the textbook/course materials?', options: ['Very Useful', 'Useful', 'Somewhat Useful', 'Not Useful'], type: 'pre' },
    { id: 'q13-mat5001-prof1', text: 'How well were statistical software tools integrated into the course?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q14-mat5001-prof1', text: 'How would you rate the difficulty level of the Applied Statistics course?', options: ['Too Difficult', 'Challenging but Manageable', 'Appropriate', 'Too Easy'], type: 'pre' },
    { id: 'q15-mat5001-prof1', text: 'How effective were the group activities or discussions in helping you understand the material?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'pre' },
    
    // Post-feedback questions (15)
    { id: 'q16-mat5001-prof1', text: 'How effective were the assessment methods used in the Applied Statistics course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q17-mat5001-prof1', text: 'Did the Applied Statistics course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q18-mat5001-prof1', text: 'What is your overall satisfaction with the Applied Statistics course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
    { id: 'q19-mat5001-prof1', text: 'How much has your understanding of statistics improved after taking this course?', options: ['Significantly Improved', 'Improved', 'Slightly Improved', 'No Improvement'], type: 'post' },
    { id: 'q20-mat5001-prof1', text: 'How likely are you to use the knowledge gained from this course in your future studies or career?', options: ['Very Likely', 'Likely', 'Somewhat Likely', 'Not Likely'], type: 'post' },
    { id: 'q21-mat5001-prof1', text: 'How fair was the grading in the Applied Statistics course?', options: ['Very Fair', 'Fair', 'Somewhat Fair', 'Not Fair'], type: 'post' },
    { id: 'q22-mat5001-prof1', text: 'How would you rate the feedback provided on your assignments and exams?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q23-mat5001-prof1', text: 'How well did the course topics connect to real-world applications?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'post' },
    { id: 'q24-mat5001-prof1', text: 'How would you rate the overall learning experience in this course?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q25-mat5001-prof1', text: 'How confident do you feel applying statistical methods after completing this course?', options: ['Very Confident', 'Confident', 'Somewhat Confident', 'Not Confident'], type: 'post' },
    { id: 'q26-mat5001-prof1', text: 'How would you rate the balance between theoretical and practical aspects of the course?', options: ['Excellent Balance', 'Good Balance', 'Too Theoretical', 'Too Practical'], type: 'post' },
    { id: 'q27-mat5001-prof1', text: 'How helpful were the office hours or additional support sessions?', options: ['Very Helpful', 'Helpful', 'Somewhat Helpful', 'Not Helpful'], type: 'post' },
    { id: 'q28-mat5001-prof1', text: 'How would you rate the clarity of the assessment criteria?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'post' },
    { id: 'q29-mat5001-prof1', text: 'How has this course contributed to your critical thinking skills?', options: ['Significantly', 'Moderately', 'Slightly', 'Not at All'], type: 'post' },
    { id: 'q30-mat5001-prof1', text: 'Would you take another course with Dr. Rajesh Kumar if given the opportunity?', options: ['Definitely Yes', 'Probably Yes', 'Probably No', 'Definitely No'], type: 'post' },
  ]],
  ['ENG5001', [
    // Pre-feedback questions (15)
    { id: 'q1-eng5001-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-eng5001-prof1', text: 'Was the course material for Basics of Communication well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-eng5001-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-eng5001-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-eng5001-prof1', text: 'Would you recommend the Basics of Communication course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-eng5001-prof1', text: 'How clear were the explanations of communication concepts?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'pre' },
    { id: 'q7-eng5001-prof1', text: 'How relevant were the examples used in the Basics of Communication course?', options: ['Very Relevant', 'Relevant', 'Somewhat Relevant', 'Not Relevant'], type: 'pre' },
    { id: 'q8-eng5001-prof1', text: 'How would you rate the pace of the Basics of Communication course?', options: ['Too Fast', 'Just Right', 'Too Slow', 'Varies'], type: 'pre' },
    { id: 'q9-eng5001-prof1', text: 'How accessible was Dr. Rajesh Kumar outside of class hours?', options: ['Very Accessible', 'Accessible', 'Somewhat Accessible', 'Not Accessible'], type: 'pre' },
    { id: 'q10-eng5001-prof1', text: 'How would you rate the quality of the assignments in Basics of Communication?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q11-eng5001-prof1', text: 'How well did the course prepare you for practical communication scenarios?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q12-eng5001-prof1', text: 'How would you rate the usefulness of the textbook/course materials?', options: ['Very Useful', 'Useful', 'Somewhat Useful', 'Not Useful'], type: 'pre' },
    { id: 'q13-eng5001-prof1', text: 'How well were practical activities integrated into the course?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q14-eng5001-prof1', text: 'How would you rate the difficulty level of the Basics of Communication course?', options: ['Too Difficult', 'Challenging but Manageable', 'Appropriate', 'Too Easy'], type: 'pre' },
    { id: 'q15-eng5001-prof1', text: 'How effective were the group activities or discussions in helping you understand the material?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'pre' },
    
    // Post-feedback questions (15)
    { id: 'q16-eng5001-prof1', text: 'How effective were the assessment methods used in the Basics of Communication course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q17-eng5001-prof1', text: 'Did the Basics of Communication course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q18-eng5001-prof1', text: 'What is your overall satisfaction with the Basics of Communication course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
    { id: 'q19-eng5001-prof1', text: 'How much has your communication ability improved after taking this course?', options: ['Significantly Improved', 'Improved', 'Slightly Improved', 'No Improvement'], type: 'post' },
    { id: 'q20-eng5001-prof1', text: 'How likely are you to use the knowledge gained from this course in your future studies or career?', options: ['Very Likely', 'Likely', 'Somewhat Likely', 'Not Likely'], type: 'post' },
    { id: 'q21-eng5001-prof1', text: 'How fair was the grading in the Basics of Communication course?', options: ['Very Fair', 'Fair', 'Somewhat Fair', 'Not Fair'], type: 'post' },
    { id: 'q22-eng5001-prof1', text: 'How would you rate the feedback provided on your assignments and presentations?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q23-eng5001-prof1', text: 'How well did the course topics connect to real-world communication scenarios?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'post' },
    { id: 'q24-eng5001-prof1', text: 'How would you rate the overall learning experience in this course?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q25-eng5001-prof1', text: 'How confident do you feel in your communication skills after completing this course?', options: ['Very Confident', 'Confident', 'Somewhat Confident', 'Not Confident'], type: 'post' },
    { id: 'q26-eng5001-prof1', text: 'How would you rate the balance between theoretical and practical aspects of the course?', options: ['Excellent Balance', 'Good Balance', 'Too Theoretical', 'Too Practical'], type: 'post' },
    { id: 'q27-eng5001-prof1', text: 'How helpful were the office hours or additional support sessions?', options: ['Very Helpful', 'Helpful', 'Somewhat Helpful', 'Not Helpful'], type: 'post' },
    { id: 'q28-eng5001-prof1', text: 'How would you rate the clarity of the assessment criteria?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'post' },
    { id: 'q29-eng5001-prof1', text: 'How has this course contributed to your interpersonal skills?', options: ['Significantly', 'Moderately', 'Slightly', 'Not at All'], type: 'post' },
    { id: 'q30-eng5001-prof1', text: 'Would you take another course with Dr. Rajesh Kumar if given the opportunity?', options: ['Definitely Yes', 'Probably Yes', 'Probably No', 'Definitely No'], type: 'post' },
  ]],
  ['CSE5042', [
    // Pre-feedback questions (15)
    { id: 'q1-cse5042-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5042-prof1', text: 'Was the course material for Blockchain Technology and Applications well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5042-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5042-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5042-prof1', text: 'Would you recommend the Blockchain Technology and Applications course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5042-prof1', text: 'How clear were the explanations of blockchain concepts?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'pre' },
    { id: 'q7-cse5042-prof1', text: 'How relevant were the examples used in the Blockchain Technology and Applications course?', options: ['Very Relevant', 'Relevant', 'Somewhat Relevant', 'Not Relevant'], type: 'pre' },
    { id: 'q8-cse5042-prof1', text: 'How would you rate the pace of the Blockchain Technology and Applications course?', options: ['Too Fast', 'Just Right', 'Too Slow', 'Varies'], type: 'pre' },
    { id: 'q9-cse5042-prof1', text: 'How accessible was Dr. Rajesh Kumar outside of class hours?', options: ['Very Accessible', 'Accessible', 'Somewhat Accessible', 'Not Accessible'], type: 'pre' },
    { id: 'q10-cse5042-prof1', text: 'How would you rate the quality of the assignments in Blockchain Technology and Applications?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q11-cse5042-prof1', text: 'How well did the course prepare you for practical blockchain development?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q12-cse5042-prof1', text: 'How would you rate the usefulness of the textbook/course materials?', options: ['Very Useful', 'Useful', 'Somewhat Useful', 'Not Useful'], type: 'pre' },
    { id: 'q13-cse5042-prof1', text: 'How well were practical coding exercises integrated into the course?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q14-cse5042-prof1', text: 'How would you rate the difficulty level of the Blockchain Technology and Applications course?', options: ['Too Difficult', 'Challenging but Manageable', 'Appropriate', 'Too Easy'], type: 'pre' },
    { id: 'q15-cse5042-prof1', text: 'How effective were the group activities or discussions in helping you understand the material?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'pre' },
    
    // Post-feedback questions (15)
    { id: 'q16-cse5042-prof1', text: 'How effective were the assessment methods used in the Blockchain Technology and Applications course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q17-cse5042-prof1', text: 'Did the Blockchain Technology and Applications course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q18-cse5042-prof1', text: 'What is your overall satisfaction with the Blockchain Technology and Applications course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
    { id: 'q19-cse5042-prof1', text: 'How much has your understanding of blockchain technologies improved after taking this course?', options: ['Significantly Improved', 'Improved', 'Slightly Improved', 'No Improvement'], type: 'post' },
    { id: 'q20-cse5042-prof1', text: 'How likely are you to use the knowledge gained from this course in your future studies or career?', options: ['Very Likely', 'Likely', 'Somewhat Likely', 'Not Likely'], type: 'post' },
    { id: 'q21-cse5042-prof1', text: 'How fair was the grading in the Blockchain Technology and Applications course?', options: ['Very Fair', 'Fair', 'Somewhat Fair', 'Not Fair'], type: 'post' },
    { id: 'q22-cse5042-prof1', text: 'How would you rate the feedback provided on your assignments and projects?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q23-cse5042-prof1', text: 'How well did the course topics connect to real-world blockchain applications?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'post' },
    { id: 'q24-cse5042-prof1', text: 'How would you rate the overall learning experience in this course?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q25-cse5042-prof1', text: 'How confident do you feel in implementing blockchain solutions after completing this course?', options: ['Very Confident', 'Confident', 'Somewhat Confident', 'Not Confident'], type: 'post' },
    { id: 'q26-cse5042-prof1', text: 'How would you rate the balance between theoretical and practical aspects of the course?', options: ['Excellent Balance', 'Good Balance', 'Too Theoretical', 'Too Practical'], type: 'post' },
    { id: 'q27-cse5042-prof1', text: 'How helpful were the office hours or additional support sessions?', options: ['Very Helpful', 'Helpful', 'Somewhat Helpful', 'Not Helpful'], type: 'post' },
    { id: 'q28-cse5042-prof1', text: 'How would you rate the clarity of the assessment criteria?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'post' },
    { id: 'q29-cse5042-prof1', text: 'How has this course contributed to your understanding of cryptocurrency concepts?', options: ['Significantly', 'Moderately', 'Slightly', 'Not at All'], type: 'post' },
    { id: 'q30-cse5042-prof1', text: 'Would you take another course with Dr. Rajesh Kumar if given the opportunity?', options: ['Definitely Yes', 'Probably Yes', 'Probably No', 'Definitely No'], type: 'post' },
  ]],
  ['CSE5011', [
    // Pre-feedback questions (15)
    { id: 'q1-cse5011-prof1', text: 'How would you rate Dr. Rajesh Kumar\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5011-prof1', text: 'Was the course material for Advanced Java Programming well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5011-prof1', text: 'Did Dr. Rajesh Kumar provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5011-prof1', text: 'How engaging were Dr. Rajesh Kumar\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5011-prof1', text: 'Would you recommend the Advanced Java Programming course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5011-prof1', text: 'How clear were the explanations of Java programming concepts?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'pre' },
    { id: 'q7-cse5011-prof1', text: 'How relevant were the examples used in the Advanced Java Programming course?', options: ['Very Relevant', 'Relevant', 'Somewhat Relevant', 'Not Relevant'], type: 'pre' },
    { id: 'q8-cse5011-prof1', text: 'How would you rate the pace of the Advanced Java Programming course?', options: ['Too Fast', 'Just Right', 'Too Slow', 'Varies'], type: 'pre' },
    { id: 'q9-cse5011-prof1', text: 'How accessible was Dr. Rajesh Kumar outside of class hours?', options: ['Very Accessible', 'Accessible', 'Somewhat Accessible', 'Not Accessible'], type: 'pre' },
    { id: 'q10-cse5011-prof1', text: 'How would you rate the quality of the programming assignments?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q11-cse5011-prof1', text: 'How well did the course prepare you for practical Java development?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q12-cse5011-prof1', text: 'How would you rate the usefulness of the textbook/course materials?', options: ['Very Useful', 'Useful', 'Somewhat Useful', 'Not Useful'], type: 'pre' },
    { id: 'q13-cse5011-prof1', text: 'How well were coding exercises integrated into the lectures?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'pre' },
    { id: 'q14-cse5011-prof1', text: 'How would you rate the difficulty level of the Advanced Java Programming course?', options: ['Too Difficult', 'Challenging but Manageable', 'Appropriate', 'Too Easy'], type: 'pre' },
    { id: 'q15-cse5011-prof1', text: 'How effective were the group projects in helping you understand Java programming?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'pre' },
    
    // Post-feedback questions (15)
    { id: 'q16-cse5011-prof1', text: 'How effective were the assessment methods used in the Advanced Java Programming course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q17-cse5011-prof1', text: 'Did the Advanced Java Programming course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q18-cse5011-prof1', text: 'What is your overall satisfaction with the Advanced Java Programming course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
    { id: 'q19-cse5011-prof1', text: 'How much has your Java programming ability improved after taking this course?', options: ['Significantly Improved', 'Improved', 'Slightly Improved', 'No Improvement'], type: 'post' },
    { id: 'q20-cse5011-prof1', text: 'How likely are you to use the knowledge gained from this course in your future studies or career?', options: ['Very Likely', 'Likely', 'Somewhat Likely', 'Not Likely'], type: 'post' },
    { id: 'q21-cse5011-prof1', text: 'How fair was the grading in the Advanced Java Programming course?', options: ['Very Fair', 'Fair', 'Somewhat Fair', 'Not Fair'], type: 'post' },
    { id: 'q22-cse5011-prof1', text: 'How would you rate the feedback provided on your programming assignments?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q23-cse5011-prof1', text: 'How well did the course topics connect to real-world Java applications?', options: ['Very Well', 'Well', 'Somewhat', 'Not Well'], type: 'post' },
    { id: 'q24-cse5011-prof1', text: 'How would you rate the overall learning experience in this course?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'post' },
    { id: 'q25-cse5011-prof1', text: 'How confident do you feel in developing Java applications after completing this course?', options: ['Very Confident', 'Confident', 'Somewhat Confident', 'Not Confident'], type: 'post' },
    { id: 'q26-cse5011-prof1', text: 'How would you rate the balance between theoretical and practical aspects of the course?', options: ['Excellent Balance', 'Good Balance', 'Too Theoretical', 'Too Practical'], type: 'post' },
    { id: 'q27-cse5011-prof1', text: 'How helpful were the office hours or additional support sessions?', options: ['Very Helpful', 'Helpful', 'Somewhat Helpful', 'Not Helpful'], type: 'post' },
    { id: 'q28-cse5011-prof1', text: 'How would you rate the clarity of the assessment criteria?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Not Clear'], type: 'post' },
    { id: 'q29-cse5011-prof1', text: 'How has this course contributed to your problem-solving skills?', options: ['Significantly', 'Moderately', 'Slightly', 'Not at All'], type: 'post' },
    { id: 'q30-cse5011-prof1', text: 'Would you take another course with Dr. Rajesh Kumar if given the opportunity?', options: ['Definitely Yes', 'Probably Yes', 'Probably No', 'Definitely No'], type: 'post' },
  ]],
]));

questionSets.set('prof2', new Map([
  ['CSE5007', [
    { id: 'q1-cse5007-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'], type: 'pre' },
    { id: 'q2-cse5007-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5007-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'], type: 'pre' },
    { id: 'q4-cse5007-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'], type: 'pre' },
    { id: 'q5-cse5007-prof2', text: 'Would you recommend the Software Development Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5007-prof2', text: 'How effective were the assessment methods used in the Software Development Framework course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5007-prof2', text: 'Did the Software Development Framework course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5007-prof2', text: 'What is your overall satisfaction with the Software Development Framework course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['PSY5101', [
    { id: 'q1-psy5101-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'], type: 'pre' },
    { id: 'q2-psy5101-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-psy5101-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'], type: 'pre' },
    { id: 'q4-psy5101-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'], type: 'pre' },
    { id: 'q5-psy5101-prof2', text: 'Would you recommend the Self Development and Interpersonal Skills course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-psy5101-prof2', text: 'How effective were the assessment methods used in the Self Development and Interpersonal Skills course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-psy5101-prof2', text: 'Did the Self Development and Interpersonal Skills course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-psy5101-prof2', text: 'What is your overall satisfaction with the Self Development and Interpersonal Skills course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5013', [
    { id: 'q1-cse5013-prof2', text: 'How clear were the instructions for assignments given by Dr. Priya Sharma?', options: ['Very Clear', 'Clear', 'Somewhat Clear', 'Unclear'], type: 'pre' },
    { id: 'q2-cse5013-prof2', text: 'Did Dr. Priya Sharma provide timely feedback on assignments?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5013-prof2', text: 'How approachable was Dr. Priya Sharma for questions and clarifications?', options: ['Very Approachable', 'Approachable', 'Somewhat Approachable', 'Not Approachable'], type: 'pre' },
    { id: 'q4-cse5013-prof2', text: 'How well did Dr. Priya Sharma explain complex concepts?', options: ['Very Well', 'Well', 'Somewhat Well', 'Not Well'], type: 'pre' },
    { id: 'q5-cse5013-prof2', text: 'Would you recommend the C# and .NET Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5013-prof2', text: 'How effective were the assessment methods used in the C# and .NET Framework course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5013-prof2', text: 'Did the C# and .NET Framework course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5013-prof2', text: 'What is your overall satisfaction with the C# and .NET Framework course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
]));

questionSets.set('prof3', new Map([
  ['CSE5070', [
    { id: 'q1-cse5070-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5070-prof3', text: 'Was the course material for Programming Language - Python well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5070-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5070-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5070-prof3', text: 'Would you recommend the Programming Language - Python course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5070-prof3', text: 'How effective were the assessment methods used in the Programming Language - Python course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5070-prof3', text: 'Did the Programming Language - Python course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5070-prof3', text: 'What is your overall satisfaction with the Programming Language - Python course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5003', [
    { id: 'q1-cse5003-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5003-prof3', text: 'Was the course material for Advanced Computer Architecture and Organization well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5003-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5003-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5003-prof3', text: 'Would you recommend the Advanced Computer Architecture and Organization course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5003-prof3', text: 'How effective were the assessment methods used in the Advanced Computer Architecture and Organization course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5003-prof3', text: 'Did the Advanced Computer Architecture and Organization course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5003-prof3', text: 'What is your overall satisfaction with the Advanced Computer Architecture and Organization course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5034', [
    { id: 'q1-cse5034-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5034-prof3', text: 'Was the course material for DevOps Orchestration well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5034-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5034-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5034-prof3', text: 'Would you recommend the DevOps Orchestration course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5034-prof3', text: 'How effective were the assessment methods used in the DevOps Orchestration course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5034-prof3', text: 'Did the DevOps Orchestration course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5034-prof3', text: 'What is your overall satisfaction with the DevOps Orchestration course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5029', [
    { id: 'q1-cse5029-prof3', text: 'How would you rate Dr. Amit Patel\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5029-prof3', text: 'Was the course material for Advanced Machine Learning well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5029-prof3', text: 'Did Dr. Amit Patel provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5029-prof3', text: 'How engaging were Dr. Amit Patel\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5029-prof3', text: 'Would you recommend the Advanced Machine Learning course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5029-prof3', text: 'How effective were the assessment methods used in the Advanced Machine Learning course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5029-prof3', text: 'Did the Advanced Machine Learning course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5029-prof3', text: 'What is your overall satisfaction with the Advanced Machine Learning course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
]));

questionSets.set('prof4', new Map([
  ['CSE5122', [
    { id: 'q1-cse5122-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5122-prof4', text: 'Was the course material for Database Management System well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5122-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5122-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5122-prof4', text: 'Would you recommend the Database Management System course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5122-prof4', text: 'How effective were the assessment methods used in the Database Management System course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5122-prof4', text: 'Did the Database Management System course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5122-prof4', text: 'What is your overall satisfaction with the Database Management System course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5004', [
    { id: 'q1-cse5004-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5004-prof4', text: 'Was the course material for Distributed Operating System well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5004-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5004-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5004-prof4', text: 'Would you recommend the Distributed Operating System course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5004-prof4', text: 'How effective were the assessment methods used in the Distributed Operating System course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5004-prof4', text: 'Did the Distributed Operating System course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5004-prof4', text: 'What is your overall satisfaction with the Distributed Operating System course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5016', [
    { id: 'q1-cse5016-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5016-prof4', text: 'Was the course material for Data Mining and Predictive well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5016-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5016-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5016-prof4', text: 'Would you recommend the Data Mining and Predictive course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5016-prof4', text: 'How effective were the assessment methods used in the Data Mining and Predictive course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5016-prof4', text: 'Did the Data Mining and Predictive course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5016-prof4', text: 'What is your overall satisfaction with the Data Mining and Predictive course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5024', [
    { id: 'q1-cse5024-prof4', text: 'How would you rate Dr. Sneha Gupta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5024-prof4', text: 'Was the course material for Advanced Software Testing well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5024-prof4', text: 'Did Dr. Sneha Gupta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5024-prof4', text: 'How engaging were Dr. Sneha Gupta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5024-prof4', text: 'Would you recommend the Advanced Software Testing course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5024-prof4', text: 'How effective were the assessment methods used in the Advanced Software Testing course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5024-prof4', text: 'Did the Advanced Software Testing course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5024-prof4', text: 'What is your overall satisfaction with the Advanced Software Testing course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
]));

questionSets.set('prof5', new Map([
  ['CSE5124', [
    { id: 'q1-cse5124-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5124-prof5', text: 'Was the course material for Data Communication and Computer Networks well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5124-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5124-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5124-prof5', text: 'Would you recommend the Data Communication and Computer Networks course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5124-prof5', text: 'How effective were the assessment methods used in the Data Communication and Computer Networks course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5124-prof5', text: 'Did the Data Communication and Computer Networks course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5124-prof5', text: 'What is your overall satisfaction with the Data Communication and Computer Networks course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['MGT5101', [
    { id: 'q1-mgt5101-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-mgt5101-prof5', text: 'Was the course material for Digital Entrepreneurship Skills well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-mgt5101-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-mgt5101-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-mgt5101-prof5', text: 'Would you recommend the Digital Entrepreneurship Skills course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-mgt5101-prof5', text: 'How effective were the assessment methods used in the Digital Entrepreneurship Skills course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-mgt5101-prof5', text: 'Did the Digital Entrepreneurship Skills course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-mgt5101-prof5', text: 'What is your overall satisfaction with the Digital Entrepreneurship Skills course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE6016', [
    { id: 'q1-cse6016-prof5', text: 'How would you rate Dr. Arun Singh\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse6016-prof5', text: 'Was the course material for Data Center Operation and Management MCA well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse6016-prof5', text: 'Did Dr. Arun Singh provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse6016-prof5', text: 'How engaging were Dr. Arun Singh\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse6016-prof5', text: 'Would you recommend the Data Center Operation and Management MCA course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse6016-prof5', text: 'How effective were the assessment methods used in the Data Center Operation and Management MCA course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse6016-prof5', text: 'Did the Data Center Operation and Management MCA course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse6016-prof5', text: 'What is your overall satisfaction with the Data Center Operation and Management MCA course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
]));

questionSets.set('prof6', new Map([
  ['CSE5126', [
    { id: 'q1-cse5126-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5126-prof6', text: 'Was the course material for Introduction to Data Science well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5126-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5126-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5126-prof6', text: 'Would you recommend the Introduction to Data Science course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5126-prof6', text: 'How effective were the assessment methods used in the Introduction to Data Science course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5126-prof6', text: 'Did the Introduction to Data Science course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5126-prof6', text: 'What is your overall satisfaction with the Introduction to Data Science course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5049', [
    { id: 'q1-cse5049-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5049-prof6', text: 'Was the course material for Business Analytics well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5049-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5049-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5049-prof6', text: 'Would you recommend the Business Analytics course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5049-prof6', text: 'How effective were the assessment methods used in the Business Analytics course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5049-prof6', text: 'Did the Business Analytics course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5049-prof6', text: 'What is your overall satisfaction with the Business Analytics course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE3009', [
    { id: 'q1-cse3009-prof6', text: 'How would you rate Dr. Maya Verma\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse3009-prof6', text: 'Was the course material for Digital Image Processing well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse3009-prof6', text: 'Did Dr. Maya Verma provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse3009-prof6', text: 'How engaging were Dr. Maya Verma\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse3009-prof6', text: 'Would you recommend the Digital Image Processing course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse3009-prof6', text: 'How effective were the assessment methods used in the Digital Image Processing course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse3009-prof6', text: 'Did the Digital Image Processing course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse3009-prof6', text: 'What is your overall satisfaction with the Digital Image Processing course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
]));

questionSets.set('prof7', new Map([
  ['CSE6003', [
    { id: 'q1-cse6003-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse6003-prof7', text: 'Was the course material for Seminar well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse6003-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse6003-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse6003-prof7', text: 'Would you recommend the Seminar course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse6003-prof7', text: 'How effective were the assessment methods used in the Seminar course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse6003-prof7', text: 'Did the Seminar course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse6003-prof7', text: 'What is your overall satisfaction with the Seminar course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5001', [
    { id: 'q1-cse5001-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5001-prof7', text: 'Was the course material for Data Structures Using Python well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5001-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5001-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5001-prof7', text: 'Would you recommend the Data Structures Using Python course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5001-prof7', text: 'How effective were the assessment methods used in the Data Structures Using Python course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5001-prof7', text: 'Did the Data Structures Using Python course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5001-prof7', text: 'What is your overall satisfaction with the Data Structures Using Python course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['SSK2002', [
    { id: 'q1-ssk2002-prof7', text: 'How would you rate Dr. Rahul Mehta\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-ssk2002-prof7', text: 'Was the course material for Being Corporate Ready well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-ssk2002-prof7', text: 'Did Dr. Rahul Mehta provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-ssk2002-prof7', text: 'How engaging were Dr. Rahul Mehta\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-ssk2002-prof7', text: 'Would you recommend the Being Corporate Ready course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-ssk2002-prof7', text: 'How effective were the assessment methods used in the Being Corporate Ready course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-ssk2002-prof7', text: 'Did the Being Corporate Ready course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-ssk2002-prof7', text: 'What is your overall satisfaction with the Being Corporate Ready course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
]));

questionSets.set('prof8', new Map([
  ['FRE1001', [
    { id: 'q1-fre1001-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-fre1001-prof8', text: 'Was the course material for Basic French well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-fre1001-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-fre1001-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-fre1001-prof8', text: 'Would you recommend the Basic French course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-fre1001-prof8', text: 'How effective were the assessment methods used in the Basic French course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-fre1001-prof8', text: 'Did the Basic French course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-fre1001-prof8', text: 'What is your overall satisfaction with the Basic French course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5018', [
    { id: 'q1-cse5018-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5018-prof8', text: 'Was the course material for Big Data Framework well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5018-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5018-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5018-prof8', text: 'Would you recommend the Big Data Framework course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5018-prof8', text: 'How effective were the assessment methods used in the Big Data Framework course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5018-prof8', text: 'Did the Big Data Framework course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5018-prof8', text: 'What is your overall satisfaction with the Big Data Framework course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
  ['CSE5002', [
    { id: 'q1-cse5002-prof8', text: 'How would you rate Dr. Anita Desai\'s teaching style?', options: ['Excellent', 'Good', 'Fair', 'Poor'], type: 'pre' },
    { id: 'q2-cse5002-prof8', text: 'Was the course material for Algorithm Design for Computer Application well-organized and easy to understand?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q3-cse5002-prof8', text: 'Did Dr. Anita Desai provide sufficient support and feedback?', options: ['Yes', 'Mostly Yes', 'Mostly No', 'No'], type: 'pre' },
    { id: 'q4-cse5002-prof8', text: 'How engaging were Dr. Anita Desai\'s lectures?', options: ['Very Engaging', 'Engaging', 'Somewhat Engaging', 'Not Engaging'], type: 'pre' },
    { id: 'q5-cse5002-prof8', text: 'Would you recommend the Algorithm Design for Computer Application course to other students?', options: ['Yes', 'Maybe', 'No', 'Definitely Not'], type: 'pre' },
    { id: 'q6-cse5002-prof8', text: 'How effective were the assessment methods used in the Algorithm Design for Computer Application course?', options: ['Very Effective', 'Effective', 'Somewhat Effective', 'Not Effective'], type: 'post' },
    { id: 'q7-cse5002-prof8', text: 'Did the Algorithm Design for Computer Application course meet your expectations?', options: ['Yes', 'Exceeded Expectations', 'Partially Met', 'Did Not Meet'], type: 'post' },
    { id: 'q8-cse5002-prof8', text: 'What is your overall satisfaction with the Algorithm Design for Computer Application course?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'], type: 'post' },
  ]],
]));

export const getQuestionsForSubject = (professorId: string, subjectCode: string): Question[] => {
  const professorQuestions = questionSets.get(professorId);
  if (!professorQuestions) {
    console.error(`No questions found for professor ID: ${professorId}`);
    return [];
  }
  const subjectQuestions = professorQuestions.get(subjectCode);
  if (!subjectQuestions) {
    console.error(`No questions found for subject code: ${subjectCode} and professor ID: ${professorId}`);
    return [];
  }
  return subjectQuestions;
};
