import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { personalInfo, education, experienceList, skills, projects } from '../data/portfolioData';

// Professional ATS-Friendly Styles (Classic Harvard/WSO Format)
const styles = StyleSheet.create({
  page: { 
    paddingTop: 40, 
    paddingBottom: 40, 
    paddingLeft: 50, 
    paddingRight: 50, 
    fontFamily: 'Helvetica', 
    fontSize: 10, 
    color: '#000', 
    lineHeight: 1.4 
  },
  
  // Header Formatting (Centered & Fixed Spacing)
  headerContainer: { textAlign: 'center', marginBottom: 15 },
  
  name: { 
    fontSize: 28, 
    fontFamily: 'Helvetica-Bold', 
    textTransform: 'uppercase', 
    marginBottom: 8, 
    letterSpacing: 1.5,
    lineHeight: 1 // FIXED: Prevents the large text from overlapping the title
  },
  
  title: { 
    fontSize: 11,
    marginTop: 6, // FIXED: Physically pushes the title down away from the name
    marginBottom: 8, 
    fontFamily: 'Helvetica' 
  },
  
  contactRow: { fontSize: 9, color: '#333', marginTop: 2 },

  // Section Headers
  sectionHeaderContainer: { 
    borderBottom: '1pt solid #000', 
    paddingBottom: 2, 
    marginBottom: 8, 
    marginTop: 12 
  },
  sectionTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', textTransform: 'uppercase' },

  // Layout Containers
  itemContainer: { marginBottom: 10 },
  
  // Flex rows for left/right alignment
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  
  // Text Styles
  boldText: { fontFamily: 'Helvetica-Bold' },
  italicText: { fontFamily: 'Helvetica-Oblique' },
  standardText: { fontSize: 10, color: '#111' },
  descriptionText: { fontSize: 10, marginTop: 3, textAlign: 'justify' },
  
  // Bullet Points
  bulletContainer: { flexDirection: 'row', marginTop: 3 },
  bulletPoint: { width: 12, fontSize: 10, textAlign: 'center' },
  bulletText: { flex: 1, fontSize: 10, textAlign: 'justify' }
});

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* 1. CENTERED HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.role}</Text>
        <Text style={styles.contactRow}>
          raqeebaswar510@gmail.com  |  +94 77 225 8931  |  Kegalle, Sri Lanka  |  github.com/Rakeeb510
        </Text>
      </View>

      {/* 2. PROFESSIONAL SUMMARY */}
      <View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
        </View>
        <Text style={styles.descriptionText}>{personalInfo.bio}</Text>
      </View>

      {/* 3. TECHNICAL SKILLS */}
      <View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
        </View>
        <Text style={[styles.standardText, { marginBottom: 2 }]}>
          <Text style={styles.boldText}>Core: </Text>{skills.primary.join(', ')}
        </Text>
        <Text style={styles.standardText}>
          <Text style={styles.boldText}>Familiar: </Text>{skills.familiar.join(', ')}
        </Text>
      </View>

      {/* 4. EXPERIENCE (Left/Right Aligned) */}
      <View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Experience</Text>
        </View>
        {experienceList.map(exp => (
          <View key={exp.id} style={styles.itemContainer}>
            <View style={styles.rowBetween}>
              <Text style={styles.boldText}>{exp.role}</Text>
              <Text style={styles.standardText}>{exp.period}</Text>
            </View>
            <Text style={styles.descriptionText}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* 5. ACADEMIC & TECHNICAL PROJECTS */}
      <View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Projects</Text>
        </View>
        {projects.map(proj => (
          <View key={proj.id} style={styles.itemContainer}>
            <View style={styles.rowBetween}>
              <Text style={styles.boldText}>{proj.title}</Text>
              <Text style={styles.italicText}>{proj.techStack.slice(0, 3).join(', ')}</Text>
            </View>
            <Text style={[styles.italicText, { fontSize: 10, marginBottom: 3 }]}>Role: {proj.role}</Text>
            
            {/* Project Bullets */}
            {proj.keyFeatures.map((feature, idx) => (
              <View key={idx} style={styles.bulletContainer}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{feature}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* 6. EDUCATION */}
      <View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Education</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.boldText}>{education.degree}</Text>
          <Text style={styles.standardText}>{education.period}</Text>
        </View>
        <Text style={styles.italicText}>{education.institution}</Text>
      </View>

    </Page>
  </Document>
);

export default CVDocument;