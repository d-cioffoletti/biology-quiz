const masterBank = [
{
    "q": "What is the primary function of the cell control system?",
    "o": [
      "To produce ATP",
      "To trigger cell cycle events in a set sequence",
      "To synthesize DNA",
      "To degrade proteins"
    ],
    "a": 1,
    "r": "It operates like a timer, triggering events in a specific order."
  },
  {
    "q": "What characterizes the 'switches' of the cell-cycle control system?",
    "o": [
      "They are continuous and reversible",
      "They are generally binary (on/off) and irreversible",
      "They are random",
      "They are slow"
    ],
    "a": 1,
    "r": "Binary, irreversible switches ensure the cycle proceeds in one direction."
  },
  {
    "q": "What is the 'Restriction Point' (R-point) in late G1?",
    "o": [
      "The point where chromosomes condense",
      "The point of no return where the cell commits to DNA replication",
      "The end of mitosis",
      "The start of cytokinesis"
    ],
    "a": 1,
    "r": "Passing the R-point commits the cell to the entire cycle."
  },
  {
    "q": "What happens if a cell does not pass the Restriction Point?",
    "o": [
      "It enters Mitosis immediately",
      "It may enter a resting state (G0)",
      "It explodes",
      "It replicates its DNA twice"
    ],
    "a": 1,
    "r": "Unfavorable conditions lead to a pause or entry into G0."
  },
  {
    "q": "What are the central components of the cell-cycle control system?",
    "o": [
      "Lipids and sugars",
      "Cyclin-dependent kinases (Cdks)",
      "Ribosomes",
      "Mitochondria"
    ],
    "a": 1,
    "r": "Cdks are the core protein kinases controlling the cycle."
  },
  {
    "q": "What regulates the activity of Cdks?",
    "o": [
      "Glucose levels",
      "Cyclins",
      "The cell wall",
      "Oxygen"
    ],
    "a": 1,
    "r": "Cdks are inactive unless bound to a cyclin."
  },
  {
    "q": "How do Cyclin levels change during the cell cycle?",
    "o": [
      "They remain constant",
      "They undergo a cycle of synthesis and degradation",
      "They only increase",
      "They only decrease"
    ],
    "a": 1,
    "r": "Cyclin levels oscillate, driving the cycle's timing."
  },
  {
    "q": "What does G1/S-cyclin do?",
    "o": [
      "Activates Cdks in late G1 to trigger progression through Start",
      "Stimulates mitosis",
      "Degrades DNA",
      "Forms the spindle"
    ],
    "a": 0,
    "r": "It commits the cell to cell-cycle entry."
  },
  {
    "q": "Which cyclin class stimulates chromosome duplication?",
    "o": [
      "G1-cyclins",
      "S-cyclins",
      "M-cyclins",
      "D-cyclins"
    ],
    "a": 1,
    "r": "S-cyclins bind Cdks to stimulate DNA replication."
  },
  {
    "q": "What is the function of M-cyclins?",
    "o": [
      "To trigger entry into Mitosis at the G2/M transition",
      "To replicate DNA",
      "To grow the cell",
      "To stop the cycle"
    ],
    "a": 0,
    "r": "M-cyclins activate Cdks that drive mitotic events."
  },
  {
    "q": "What is CAK?",
    "o": [
      "Cdk-activating kinase",
      "Cell apoptosis kinase",
      "Cyclin altering kinase",
      "Centrosome active kinase"
    ],
    "a": 0,
    "r": "CAK phosphorylates Cdk to fully activate the cyclin-Cdk complex."
  },
  {
    "q": "What is the Anaphase-Promoting Complex (APC/C)?",
    "o": [
      "A kinase",
      "A ubiquitin ligase",
      "A DNA polymerase",
      "A transcription factor"
    ],
    "a": 1,
    "r": "APC/C tags proteins with ubiquitin for destruction."
  },
  {
    "q": "What does the APC/C destroy to trigger anaphase?",
    "o": [
      "Actin",
      "Securin",
      "DNA",
      "Ribosomes"
    ],
    "a": 1,
    "r": "Destroying securin releases separase to cleave cohesin."
  },
  {
    "q": "What other major protein type does APC/C destroy?",
    "o": [
      "S- and M-cyclins",
      "G1-cyclins",
      "Tubulin",
      "Histones"
    ],
    "a": 0,
    "r": "Destruction of cyclins inactivates Cdks, allowing exit from mitosis."
  },
  {
    "q": "What is the role of SCF?",
    "o": [
      "To ubiquitylate CKI proteins in late G1",
      "To phosphorylate Cdks",
      "To replicate DNA",
      "To form the spindle"
    ],
    "a": 0,
    "r": "SCF helps control S-Cdk activation and DNA replication."
  },
  {
    "q": "What are CKI proteins?",
    "o": [
      "Cdk Inhibitor proteins",
      "Cell Killer Ingredients",
      "Cyclin Kinase Inducers",
      "Centrosome Kinetochore Interactions"
    ],
    "a": 0,
    "r": "CKIs bind to Cdk complexes to inhibit their activity."
  },
  {
    "q": "What is 'Contact Inhibition'?",
    "o": [
      "Cells stop proliferating when they touch surrounding cells",
      "Cells grow faster when touching",
      "Cells die upon contact",
      "Cells fuse together"
    ],
    "a": 0,
    "r": "It prevents uncontrolled growth and maintains a monolayer."
  },
  {
    "q": "Which class of extracellular signals stimulates cell division?",
    "o": [
      "Mitogens",
      "Growth Factors",
      "Survival Factors",
      "Nutrients"
    ],
    "a": 0,
    "r": "Mitogens trigger G1/S-Cdk activity to relieve negative controls."
  },
  {
    "q": "Which class of signals stimulates an increase in cell mass?",
    "o": [
      "Mitogens",
      "Growth Factors",
      "Survival Factors",
      "Death Factors"
    ],
    "a": 1,
    "r": "Growth factors promote protein synthesis and growth."
  },
  {
    "q": "What is the role of p53 in the cell cycle?",
    "o": [
      "To speed up division",
      "To sense DNA damage and halt the cycle",
      "To synthesize DNA",
      "To build the spindle"
    ],
    "a": 1,
    "r": "p53 arrests the cycle in G1 to allow for repair."
  },
  {
    "q": "Which protein does p53 induce to inhibit Cdks?",
    "o": [
      "p21",
      "Ras",
      "Myc",
      "Bcl2"
    ],
    "a": 0,
    "r": "p21 is a CKI that inhibits G1/S-Cdk and S-Cdk."
  },
  {
    "q": "What happens to a cell with irreparable DNA damage?",
    "o": [
      "It divides anyway",
      "It undergoes apoptosis",
      "It becomes a stem cell",
      "It shrinks"
    ],
    "a": 1,
    "r": "Apoptosis eliminates damaged cells to prevent cancer."
  },
  {
    "q": "What is the difference between Apoptosis and Necrosis?",
    "o": [
      "Apoptosis is messy, Necrosis is clean",
      "Apoptosis is programmed/clean, Necrosis is accidental/messy",
      "They are the same",
      "Necrosis requires ATP"
    ],
    "a": 1,
    "r": "Apoptosis avoids inflammation; necrosis causes it."
  },
  {
    "q": "Which proteases mediate apoptosis?",
    "o": [
      "Kinases",
      "Caspases",
      "Ligases",
      "Polymerases"
    ],
    "a": 1,
    "r": "Caspases are the executioners of apoptosis."
  },
  {
    "q": "What are the two major pathways of apoptosis?",
    "o": [
      "Extrinsic and Intrinsic",
      "Fast and Slow",
      "Mitotic and Meiotic",
      "G1 and G2"
    ],
    "a": 0,
    "r": "Extrinsic (death receptor) and Intrinsic (mitochondrial)."
  },
  {
    "q": "Which organelle plays a key role in the intrinsic apoptotic pathway?",
    "o": [
      "Nucleus",
      "Mitochondria",
      "Golgi",
      "ER"
    ],
    "a": 1,
    "r": "Mitochondria release Cytochrome c."
  },
  {
    "q": "What molecule is released from mitochondria to trigger the intrinsic pathway?",
    "o": [
      "ATP",
      "Cytochrome c",
      "Glucose",
      "DNA"
    ],
    "a": 1,
    "r": "Cytochrome c binds Apaf1."
  },
  {
    "q": "What is the 'Apoptosome'?",
    "o": [
      "A ribosome",
      "A wheel-like complex of Apaf1 and Cytochrome c",
      "A death receptor",
      "A viral particle"
    ],
    "a": 1,
    "r": "It recruits and activates Caspase-9."
  },
  {
    "q": "Which Bcl2 family members are pro-apoptotic?",
    "o": [
      "Bcl2 and BclXL",
      "Bax and Bak",
      "Ras and Myc",
      "Cdk and Cyclin"
    ],
    "a": 1,
    "r": "Bax and Bak form pores to release Cytochrome c."
  },
  {
    "q": "Which Bcl2 family members are anti-apoptotic?",
    "o": [
      "Bax and Bak",
      "Bcl2 and BclXL",
      "Bad and Bid",
      "Caspases"
    ],
    "a": 1,
    "r": "They suppress Box/Bak to prevent apoptosis."
  },
  {
    "q": "What triggers the Extrinsic pathway?",
    "o": [
      "DNA damage",
      "Binding of death ligands (e.g., Fas ligand) to death receptors",
      "Lack of nutrients",
      "Mitochondrial failure"
    ],
    "a": 1,
    "r": "External signals activate death receptors."
  },
  {
    "q": "What is the DISC?",
    "o": [
      "Death-Inducing Signaling Complex",
      "DNA Internal Signaling Code",
      "Double Intrinsic Signal Caspase",
      "A compact disc"
    ],
    "a": 0,
    "r": "DISC assembles at the death receptor tail."
  },
  {
    "q": "Which caspase is the initiator in the Extrinsic pathway?",
    "o": [
      "Caspase-9",
      "Caspase-8",
      "Caspase-3",
      "Caspase-1"
    ],
    "a": 1,
    "r": "Caspase-8 is recruited to the DISC."
  },
  {
    "q": "Which caspase is the initiator in the Intrinsic pathway?",
    "o": [
      "Caspase-8",
      "Caspase-9",
      "Caspase-3",
      "Caspase-7"
    ],
    "a": 1,
    "r": "Caspase-9 is activated in the apoptosome."
  },
  {
    "q": "What do executioner caspases (3, 6, 7) do?",
    "o": [
      "Initiate the signal",
      "Cleave downstream targets to dismantle the cell",
      "Repair DNA",
      "Build proteins"
    ],
    "a": 1,
    "r": "They carry out the death sentence."
  },
  {
    "q": "What is the G2/M checkpoint checking for?",
    "o": [
      "Proper spindle attachment",
      "Complete and accurate DNA replication",
      "Nutrient availability",
      "Cell size only"
    ],
    "a": 1,
    "r": "It prevents mitosis if DNA is damaged or unreplicated."
  },
  {
    "q": "What is the Spindle Checkpoint ensuring?",
    "o": [
      "That DNA is replicated",
      "That all chromosomes are aligned and attached to the spindle bipolarly",
      "That the cell is big enough",
      "That cyclins are degraded"
    ],
    "a": 1,
    "r": "It prevents anaphase until alignment is correct."
  },
  {
    "q": "What protein inhibits the APC/C until the spindle checkpoint is satisfied?",
    "o": [
      "Securin",
      "Mad2 (part of the checkpoint signal)",
      "Cdc20",
      "Separase"
    ],
    "a": 1,
    "r": "Unattached kinetochores generate a signal (involving Mad2) to block APC/C."
  },
  {
    "q": "What is caused by failure of the Spindle Checkpoint?",
    "o": [
      "Nondisjunction and Aneuploidy",
      "DNA mutations",
      "Apoptosis",
      "Cell growth"
    ],
    "a": 0,
    "r": "Chromosomes segregate unequally."
  },
  {
    "q": "What is 'Retinoblastoma' (Rb) protein?",
    "o": [
      "A tumor suppressor that inhibits E2F",
      "A growth factor",
      "A cyclin",
      "A caspase"
    ],
    "a": 0,
    "r": "Rb prevents S-phase entry until phosphorylated by G1-Cdk."
  },
  {
    "q": "How do Mitogens trigger the cell cycle?",
    "o": [
      "By activating Ras and the MAP kinase pathway",
      "By destroying DNA",
      "By inhibiting Myc",
      "By activating p53"
    ],
    "a": 0,
    "r": "They stimulate Cdk activity via the Ras/MAPK pathway."
  },
  {
    "q": "What transcription factor is increased by Mitogens?",
    "o": [
      "Myc",
      "p53",
      "Bcl2",
      "Actin"
    ],
    "a": 0,
    "r": "Myc promotes G1-Cdk expression."
  },
  {
    "q": "What is 'start' in the yeast cell cycle?",
    "o": [
      "The end of mitosis",
      "The point equivalent to the Restriction Point",
      "The start of protein synthesis",
      "The Start codon"
    ],
    "a": 1,
    "r": "It is the commitment point in G1."
  },
  {
    "q": "Does DNA damage always lead to apoptosis?",
    "o": [
      "Yes",
      "No, it first attempts repair (arrest)",
      "No, it ignores it",
      "Yes, immediately"
    ],
    "a": 1,
    "r": "The cell arrests to try to repair; apoptosis is the last resort."
  },
  {
    "q": "What are 'Survival Factors'?",
    "o": [
      "Signals that suppress apoptosis",
      "Signals that kill the cell",
      "Nutrients",
      "Oxygen"
    ],
    "a": 0,
    "r": "They are required to keep the apoptotic program suppressed."
  },
  {
    "q": "What is the role of ATM and ATR?",
    "o": [
      "To build DNA",
      "To sense DNA damage and activate checkpoints",
      "To divide the cell",
      "To form the spindle"
    ],
    "a": 1,
    "r": "They are kinases activated by DNA damage."
  },
  {
    "q": "What is the pre-Replicative Complex (preRC)?",
    "o": [
      "A complex formed at origins in G1 to license replication",
      "A transcription complex",
      "A ribosome",
      "A degradation complex"
    ],
    "a": 0,
    "r": "It primes origins for firing in S phase."
  },
  {
    "q": "Why can each origin only fire once per cycle?",
    "o": [
      "S-Cdk activation prevents re-assembly of the preRC",
      "DNA runs out",
      "Origins are destroyed",
      "It can fire multiple times"
    ],
    "a": 0,
    "r": "Phosphorylation by S-Cdk prevents re-licensing."
  },
  {
    "q": "Which protein holds sister chromatids together?",
    "o": [
      "Condensin",
      "Cohesin",
      "Tubulin",
      "Actin"
    ],
    "a": 1,
    "r": "Cohesin rings encircle the sisters."
  },
  {
    "q": "What happens to the nuclear envelope during apoptosis?",
    "o": [
      "It disassembles and the nucleus fragments",
      "It grows",
      "It fuses with the cell membrane",
      "It becomes rigid"
    ],
    "a": 0,
    "r": "Lamin cleavage leads to nuclear collapse."
  },
{
    "q": "What is the Central Dogma of Molecular Biology?",
    "o": [
      "Protein -> RNA -> DNA",
      "DNA -> RNA -> Protein",
      "RNA -> DNA -> Protein",
      "DNA -> Protein -> RNA"
    ],
    "a": 1,
    "r": "Genetic information flows from DNA to RNA (transcription) to Protein (translation)."
  },
  {
    "q": "In which phase of the cell cycle does DNA replication occur?",
    "o": [
      "G1 phase",
      "S phase",
      "G2 phase",
      "M phase"
    ],
    "a": 1,
    "r": "DNA replication occurs during the Synthesis (S) phase."
  },
  {
    "q": "DNA replication is 'semiconservative'. What does this mean?",
    "o": [
      "One daughter molecule is entirely new, the other is old",
      "Each new DNA molecule consists of one old (parental) strand and one newly synthesized strand",
      "Both strands are mixtures of old and new DNA",
      "It occurs only half the time"
    ],
    "a": 1,
    "r": "Each parental strand serves as a template for a new complementary strand."
  },
  {
    "q": "In which direction does DNA synthesis always proceed?",
    "o": [
      "3' to 5'",
      "5' to 3'",
      "Randomly",
      "Both directions simultaneously on the same strand"
    ],
    "a": 1,
    "r": "DNA polymerase adds nucleotides only to the 3' end (growing 5'->3')."
  },
  {
    "q": "What is the function of DNA Helicase?",
    "o": [
      "To synthesize DNA",
      "To unwind the DNA double helix",
      "To join DNA fragments",
      "To synthesize RNA primers"
    ],
    "a": 1,
    "r": "Helicase separates the two DNA strands using ATP."
  },
  {
    "q": "What is an 'Origin of Replication'?",
    "o": [
      "The end of the chromosome",
      "The specific site where replication begins",
      "A type of enzyme",
      "A mutation"
    ],
    "a": 1,
    "r": "It is a specific sequence where the replication bubble forms."
  },
  {
    "q": "Why is a primer needed for DNA polymerase?",
    "o": [
      "It provides energy",
      "DNA polymerase cannot initiate a chain; it needs a free 3'-OH end",
      "It unwinds the DNA",
      "It prevents errors"
    ],
    "a": 1,
    "r": "Polymerase can only extend an existing chain."
  },
  {
    "q": "Which enzyme synthesizes the primer?",
    "o": [
      "DNA Polymerase",
      "DNA Primase",
      "Helicase",
      "Ligase"
    ],
    "a": 1,
    "r": "Primase creates a short RNA primer."
  },
  {
    "q": "What is the 'Leading Strand'?",
    "o": [
      "The strand synthesized discontinuously",
      "The strand synthesized continuously in the direction of the replication fork",
      "The template strand",
      "The RNA strand"
    ],
    "a": 1,
    "r": "It follows the opening fork continuously."
  },
  {
    "q": "What are 'Okazaki fragments'?",
    "o": [
      "Fragments of the leading strand",
      "Short DNA fragments synthesized discontinuously on the lagging strand",
      "RNA primers",
      "Degraded DNA"
    ],
    "a": 1,
    "r": "The lagging strand is built in short backward pieces."
  },
  {
    "q": "Which enzyme joins Okazaki fragments together?",
    "o": [
      "DNA Polymerase",
      "DNA Ligase",
      "Primase",
      "Helicase"
    ],
    "a": 1,
    "r": "Ligase seals the sugar-phosphate backbone."
  },
  {
    "q": "What is the function of Single-Strand Binding (SSB) proteins?",
    "o": [
      "To synthesize DNA",
      "To prevent single-stranded DNA from re-annealing or forming secondary structures",
      "To degrade DNA",
      "To wind DNA"
    ],
    "a": 1,
    "r": "They stabilize the unwound single strands."
  },
  {
    "q": "What is the role of DNA Topoisomerase?",
    "o": [
      "To synthesize primers",
      "To relieve tension/supercoiling caused by unwinding",
      "To bind single strands",
      "To degrade RNA"
    ],
    "a": 1,
    "r": "It nicks the DNA to relieve torsional stress (the winding problem)."
  },
  {
    "q": "How does DNA Polymerase proofread?",
    "o": [
      "It has 5'-to-3' exonuclease activity",
      "It has 3'-to-5' exonuclease activity to remove incorrect nucleotides",
      "It uses RNA",
      "It doesn't proofread"
    ],
    "a": 1,
    "r": "It checks the last added nucleotide and removes it if mismatched."
  },
  {
    "q": "What is Telomerase?",
    "o": [
      "An enzyme that replicates the ends (telomeres) of linear chromosomes",
      "An enzyme that degrades telomeres",
      "A type of ligase",
      "A membrane protein"
    ],
    "a": 0,
    "r": "It extends telomeres using an internal RNA template to solve the end-replication problem."
  },
  {
    "q": "What happens to telomeres in most somatic cells over time?",
    "o": [
      "They lengthen",
      "They shorten with each division",
      "They stay the same",
      "They circularize"
    ],
    "a": 1,
    "r": "This shortening limits the cell's lifespan (replicative senescence)."
  },
  {
    "q": "What distinguishes RNA from DNA chemically?",
    "o": [
      "Ribose sugar and Uracil base",
      "Deoxyribose sugar and Thymine base",
      "Double strandedness",
      "Size"
    ],
    "a": 0,
    "r": "RNA has ribose (OH at 2') and Uracil instead of Thymine."
  },
  {
    "q": "Is RNA typically single or double-stranded?",
    "o": [
      "Double-stranded",
      "Single-stranded",
      "Triple-stranded",
      "Circular"
    ],
    "a": 1,
    "r": "RNA is single-stranded but can fold into 3D shapes."
  },
  {
    "q": "What enzyme performs transcription?",
    "o": [
      "DNA Polymerase",
      "RNA Polymerase",
      "Ribosome",
      "Ligase"
    ],
    "a": 1,
    "r": "RNA Polymerase synthesizes RNA from a DNA template."
  },
  {
    "q": "Does RNA polymerase need a primer?",
    "o": [
      "Yes",
      "No",
      "Only in bacteria",
      "Only for mRNA"
    ],
    "a": 1,
    "r": "RNA polymerase can start synthesis de novo."
  },
  {
    "q": "What constitutes a 'Transcription Unit'?",
    "o": [
      "Promoter, Gene Sequence, Terminator",
      "Intron and Exon",
      "Start and Stop codon",
      "Ribosome"
    ],
    "a": 0,
    "r": "It is the segment of DNA transcribed into RNA."
  },
  {
    "q": "What is a Promoter?",
    "o": [
      "A protein",
      "A DNA sequence where RNA polymerase binds to start transcription",
      "The end of the gene",
      "An RNA molecule"
    ],
    "a": 1,
    "r": "It signals the start site."
  },
  {
    "q": "Which strand of DNA is transcribed?",
    "o": [
      "The Coding (Non-template) strand",
      "The Template strand",
      "Both strands",
      "Neither"
    ],
    "a": 1,
    "r": "The template strand is complementary to the RNA."
  },
  {
    "q": "In which direction is RNA synthesized?",
    "o": [
      "3' to 5'",
      "5' to 3'",
      "N to C",
      "Random"
    ],
    "a": 1,
    "r": "Same as DNA synthesis, 5' to 3'."
  },
  {
    "q": "What is Sigma factor (σ) in bacteria?",
    "o": [
      "A subunit of RNA polymerase that recognizes the promoter",
      "A transcription factor",
      "A ribosome subunit",
      "An operator"
    ],
    "a": 0,
    "r": "It guides the polymerase to the correct start site."
  },
  {
    "q": "How many RNA polymerases do eukaryotic nuclei have?",
    "o": [
      "One",
      "Two",
      "Three (I, II, III)",
      "Five"
    ],
    "a": 2,
    "r": "Pol I (rRNA), Pol II (mRNA), Pol III (tRNA/5S rRNA)."
  },
  {
    "q": "What does RNA Polymerase II transcribe?",
    "o": [
      "rRNA",
      "mRNA (protein-coding genes)",
      "tRNA",
      "All RNAs"
    ],
    "a": 1,
    "r": "It transcribes the genes that code for proteins."
  },
  {
    "q": "What are General Transcription Factors (TFIIs)?",
    "o": [
      "Proteins required for polymerase binding and initiation in eukaryotes",
      "Bacterial sigma factors",
      "Repressors",
      "Enhancers"
    ],
    "a": 0,
    "r": "They position Pol II at the promoter."
  },
  {
    "q": "What processing steps does eukaryotic mRNA undergo?",
    "o": [
      "None",
      "Capping, Splicing, and Polyadenylation",
      "Digestion",
      "Replication"
    ],
    "a": 1,
    "r": "These steps mature the pre-mRNA."
  },
  {
    "q": "What is the 5' Cap?",
    "o": [
      "A modified guanine nucleotide added to the 5' end",
      "A string of adenines",
      "A methionine",
      "A ribosome"
    ],
    "a": 0,
    "r": "It protects the RNA and helps in translation initiation."
  },
  {
    "q": "What is Splicing?",
    "o": [
      "Removal of exons",
      "Removal of introns and joining of exons",
      "Addition of a tail",
      "Degradation of RNA"
    ],
    "a": 1,
    "r": "Non-coding introns are removed."
  },
  {
    "q": "What carries out splicing?",
    "o": [
      "Ribosome",
      "Spliceosome (snRNPs)",
      "Polymerase",
      "Ligase"
    ],
    "a": 1,
    "r": "snRNPs recognize splice sites and catalyze removal."
  },
  {
    "q": "What are Exons?",
    "o": [
      "Expressed/Coding sequences",
      "Intervening/Non-coding sequences",
      "Promoters",
      "Enhancers"
    ],
    "a": 0,
    "r": "Exons remain in the mature mRNA."
  },
  {
    "q": "What is Polyadenylation?",
    "o": [
      "Addition of a Poly-A tail to the 3' end",
      "Addition of a cap",
      "Splicing",
      "Transcription start"
    ],
    "a": 0,
    "r": "A string of A's stabilizes the 3' end."
  },
  {
    "q": "What is a Codon?",
    "o": [
      "A single nucleotide",
      "A triplet of nucleotides coding for an amino acid",
      "A protein",
      "A gene"
    ],
    "a": 1,
    "r": "Proteins are specified by triplet codons."
  },
  {
    "q": "How many codons are there in the genetic code?",
    "o": [
      "20",
      "64",
      "16",
      "4"
    ],
    "a": 1,
    "r": "4^3 = 64 combinations."
  },
  {
    "q": "What does it mean that the code is 'degenerate'?",
    "o": [
      "It is ambiguous",
      "Multiple codons can code for the same amino acid",
      "It breaks down",
      "It is universal"
    ],
    "a": 1,
    "r": "e.g., Leucine has 6 codons."
  },
  {
    "q": "What is the Start Codon?",
    "o": [
      "UAA",
      "AUG (Methionine)",
      "UAG",
      "GGG"
    ],
    "a": 1,
    "r": "AUG establishes the reading frame."
  },
  {
    "q": "What is an Anticodon?",
    "o": [
      "The template DNA",
      "A triplet on tRNA that matches the mRNA codon",
      "The protein",
      "The ribosome"
    ],
    "a": 1,
    "r": "tRNA uses the anticodon to read the mRNA."
  },
  {
    "q": "What macromolecular machine performs translation?",
    "o": [
      "Nucleus",
      "Ribosome",
      "Golgi",
      "Lysosome"
    ],
    "a": 1,
    "r": "Ribosomes synthesize proteins."
  },
  {
    "q": "What are the three binding sites for tRNA on the ribosome?",
    "o": [
      "A, B, C",
      "A (Aminoacyl), P (Peptidyl), E (Exit)",
      "X, Y, Z",
      "1, 2, 3"
    ],
    "a": 1,
    "r": "A for arrival, P for holding the peptide, E for exit."
  },
  {
    "q": "What catalyzes the peptide bond formation?",
    "o": [
      "Ribosomal proteins",
      "rRNA (Ribozyme activity)",
      "tRNA",
      "mRNA"
    ],
    "a": 1,
    "r": "The ribosome is a ribozyme; rRNA is the catalyst."
  },
  {
    "q": "What signals the end of translation?",
    "o": [
      "Poly-A tail",
      "Stop Codon (UAA, UAG, UGA)",
      "Cap",
      "Promoter"
    ],
    "a": 1,
    "r": "Stop codons recruit release factors."
  },
  {
    "q": "What is a 'Polyribosome' (Polysome)?",
    "o": [
      "A single ribosome",
      "Multiple ribosomes translating the same mRNA simultaneously",
      "A type of RNA",
      "A defective ribosome"
    ],
    "a": 1,
    "r": "It increases the rate of protein synthesis."
  },
  {
    "q": "In which cellular compartment does transcription occur in eukaryotes?",
    "o": [
      "Cytoplasm",
      "Nucleus",
      "Mitochondria only",
      "Membrane"
    ],
    "a": 1,
    "r": "DNA is in the nucleus."
  },
  {
    "q": "In which cellular compartment does translation occur?",
    "o": [
      "Nucleus",
      "Cytoplasm (or Rough ER)",
      "Golgi",
      "Lysosome"
    ],
    "a": 1,
    "r": "Ribosomes are in the cytoplasm."
  },
  {
    "q": "What is 'Alternative Splicing'?",
    "o": [
      "Splicing DNA",
      "Producing different mRNAs/proteins from a single gene by selecting different exons",
      "Splicing without snRNPs",
      "Splicing in bacteria"
    ],
    "a": 1,
    "r": "It increases protein diversity from a limited genome."
  },
  {
    "q": "What is 'Aminoacyl-tRNA Synthetase'?",
    "o": [
      "An enzyme that attaches the correct amino acid to its tRNA",
      "An enzyme that builds ribosomes",
      "A polymerase",
      "A transcription factor"
    ],
    "a": 0,
    "r": "It 'charges' the tRNA."
  },
  {
    "q": "What is the 'Wobble' hypothesis?",
    "o": [
      "Ribosomes are unstable",
      "Flexible base pairing at the 3rd position of the codon",
      "tRNA is loose",
      "DNA is shaky"
    ],
    "a": 1,
    "r": "It allows fewer tRNAs to cover all 61 codons."
  },
  {
    "q": "What serves as the template for Translation?",
    "o": [
      "rRNA",
      "mRNA",
      "tRNA",
      "DNA"
    ],
    "a": 1,
    "r": "mRNA carries the code from the nucleus."
  },
  {
    "q": "Where does the energy for peptide bond formation come from?",
    "o": [
      "ATP hydrolysis during formation",
      "The high-energy bond between the amino acid and tRNA (created during charging)",
      "GTP",
      "Sunlight"
    ],
    "a": 1,
    "r": "Synthetases use ATP to create this high-energy bond."
  },
  {
    "q": "What are Release Factors?",
    "o": [
      "Proteins that bind stop codons to terminate translation",
      "tRNAs for stop codons",
      "Enzymes that release DNA",
      "Growth factors"
    ],
    "a": 0,
    "r": "They mimic tRNA and add water to release the peptide."
  },
  {
    "q": "What is a 'Proteasome'?",
    "o": [
      "A machine for protein synthesis",
      "A machine for degrading ubiquitin-tagged proteins",
      "A ribosome",
      "A DNA repair complex"
    ],
    "a": 1,
    "r": "It recycles proteins."
  },
  {
    "q": "What is the tag for protein degradation?",
    "o": [
      "Phosphate",
      "Ubiquitin",
      "Methyl",
      "Acetyl"
    ],
    "a": 1,
    "r": "Polyubiquitin chains mark proteins for the proteasome."
  },
  {
    "q": "Do bacteria have introns?",
    "o": [
      "Yes, many",
      "No (rarely)",
      "Only in tRNA",
      "Yes, in all genes"
    ],
    "a": 1,
    "r": "Bacterial genes are typically continuous."
  },
  {
    "q": "Are transcription and translation coupled in bacteria?",
    "o": [
      "No",
      "Yes, translation can start before transcription ends",
      "Only in M phase",
      "Never"
    ],
    "a": 1,
    "r": "There is no nucleus to separate them."
  },
  {
    "q": "What is a 'Ribozyme'?",
    "o": [
      "An RNA molecule with enzymatic activity",
      "A protein enzyme",
      "A sugar",
      "A lipid"
    ],
    "a": 0,
    "r": "e.g., the ribosome peptidyl transferase center."
  },
  {
    "q": "What is 'Initiator tRNA'?",
    "o": [
      "The first tRNA carrying Methionine",
      "Any tRNA",
      "Stop tRNA",
      "Primase"
    ],
    "a": 0,
    "r": "It binds to the P site to start translation."
  },
  {
    "q": "What is the role of the Small Ribosomal Subunit?",
    "o": [
      "Catalyzes peptide bonds",
      "Matches tRNAs to mRNA codons",
      "Degrades proteins",
      "Synthesizes DNA"
    ],
    "a": 1,
    "r": "It handles the decoding."
  },
  {
    "q": "What is the role of the Large Ribosomal Subunit?",
    "o": [
      "Catalyzes peptide bond formation",
      "Binds mRNA",
      "Reads the code",
      "None"
    ],
    "a": 0,
    "r": "It contains the peptidyl transferase center."
  },
  {
    "q": "What is 'Post-translational modification'?",
    "o": [
      "Splicing",
      "Chemical modification of proteins after synthesis (e.g., phosphorylation)",
      "DNA repair",
      "Transcription"
    ],
    "a": 1,
    "r": "It regulates protein function."
  },
  {
    "q": "What is the error rate of Transcription compared to Replication?",
    "o": [
      "Higher (1 in 10^4)",
      "Lower",
      "The same",
      "Zero"
    ],
    "a": 0,
    "r": "RNA mistakes are less critical as they are transient."
  },
  {
    "q": "What are 'Enhancers'?",
    "o": [
      "Regulatory DNA sequences that increase transcription",
      "Proteins",
      "RNA molecules",
      "Promoters"
    ],
    "a": 0,
    "r": "They bind activator proteins and can be far from the gene."
  },
  {
    "q": "Can a single mRNA be translated by multiple ribosomes?",
    "o": [
      "No",
      "Yes (Polysome)",
      "Only in bacteria",
      "Only in viruses"
    ],
    "a": 1,
    "r": "Yes, forming a polysome."
  },
  {
    "q": "What enzyme 'charges' tRNA?",
    "o": [
      "Aminoacyl-tRNA Synthetase",
      "Peptidyl transferase",
      "Polymerase",
      "Kinase"
    ],
    "a": 0,
    "r": "It links the amino acid to the tRNA."
  },
  {
    "q": "What is the TATA box?",
    "o": [
      "A terminator",
      "A promoter consensus sequence recognized by TBP",
      "An enhancer",
      "A silencer"
    ],
    "a": 1,
    "r": "TBP (part of TFIID) binds TATA to initiate complex assembly."
  },
  {
    "q": "How is the 'Reading Frame' set?",
    "o": [
      "By the TATA box",
      "By the Start Codon (AUG)",
      "By the Cap",
      "Randomly"
    ],
    "a": 1,
    "r": "Starting at the wrong nucleotide shifts the frame."
  },
  {
    "q": "What happens if a nucleotide is deleted from the coding region?",
    "o": [
      "Frameshift mutation",
      "Nothing",
      "Transcription stops",
      "Better protein"
    ],
    "a": 0,
    "r": "The reading frame is disrupted."
  },
  {
    "q": "Which site on the ribosome accepts the new incoming aminoacyl-tRNA?",
    "o": [
      "P site",
      "A site",
      "E site",
      "Z site"
    ],
    "a": 1,
    "r": "A stands for Aminoacyl."
  },
  {
    "q": "Which site holds the growing polypeptide chain?",
    "o": [
      "A site",
      "P site",
      "E site",
      "T site"
    ],
    "a": 1,
    "r": "P stands for Peptidyl."
  },
  {
    "q": "What provides the energy for ribosome movement (translocation)?",
    "o": [
      "ATP",
      "GTP hydrolysis (by EF-G/EF-2)",
      "Heat",
      "Light"
    ],
    "a": 1,
    "r": "Elongation factors use GTP."
  },
  {
    "q": "What is a 'Silent Mutation'?",
    "o": [
      "A mutation that changes the amino acid",
      "A mutation that creates a stop codon",
      "A mutation that does not change the amino acid (due to degeneracy)",
      "A loud mutation"
    ],
    "a": 2,
    "r": "The protein sequence remains the same."
  },
  {
    "q": "What is a 'Nonsense Mutation'?",
    "o": [
      "Changes an amino acid to a Stop codon",
      "Changes an amino acid to another",
      "Does nothing",
      "Changes the promoter"
    ],
    "a": 0,
    "r": "It leads to premature termination."
  },
  {
    "q": "What is a 'Missense Mutation'?",
    "o": [
      "Changes an amino acid to another",
      "Creates a stop",
      "Silent",
      "Frameshift"
    ],
    "a": 0,
    "r": "The protein sequence is altered."
  },
  {
    "q": "What is the function of the 3' Poly-A tail?",
    "o": [
      "Stability and export",
      "Coding",
      "Replication",
      "Splicing"
    ],
    "a": 0,
    "r": "Protects mRNA from degradation."
  },
  {
    "q": "Which DNA strand has the same sequence as the mRNA (except T/U)?",
    "o": [
      "Template strand",
      "Coding strand",
      "Neither",
      "Both"
    ],
    "a": 1,
    "r": "The non-template strand is called the coding strand."
  },
  {
    "q": "What is 'Rho-dependent' termination?",
    "o": [
      "Termination requiring the Rho protein factor",
      "Hairpin termination",
      "Stop codon",
      "Splicing"
    ],
    "a": 0,
    "r": "Rho travels up the RNA to pull it off."
  },
  {
    "q": "What is 'Rho-independent' termination?",
    "o": [
      "Formation of a hairpin loop structure in the RNA",
      "Rho protein",
      "Digestion",
      "Replication"
    ],
    "a": 0,
    "r": "Structure disrupts the polymerase."
  },
  {
    "q": "What is a 'Gene'?",
    "o": [
      "A protein",
      "A segment of DNA that encodes a functional product (RNA or protein)",
      "A chromosome",
      "A cell"
    ],
    "a": 1,
    "r": "The fundamental unit of heredity."
  },
  {
    "q": "What are snRNPs?",
    "o": [
      "Small Nuclear Ribonucleoproteins",
      "Simple RNA Proteins",
      "Single Nucleotide Proteins",
      "Sugar Proteins"
    ],
    "a": 0,
    "r": "Components of the spliceosome."
  },
  {
    "q": "What is the 5'->3' direction referring to?",
    "o": [
      "Carbon numbers on the sugar ring",
      "The size of the base",
      "The length of the DNA",
      "The order of genes"
    ],
    "a": 0,
    "r": "Synthesis goes from the 5' carbon to the 3' carbon."
  },
  {
    "q": "What bond leads to the backbone of DNA?",
    "o": [
      "Peptide bond",
      "Phosphodiester bond",
      "Hydrogen bond",
      "Ionic bond"
    ],
    "a": 1,
    "r": "Sugar-Phosphate backbone."
  },
  {
    "q": "What bond holds the two DNA strands together?",
    "o": [
      "Covalent bonds",
      "Hydrogen bonds between bases",
      "Ionic bonds",
      "Peptide bonds"
    ],
    "a": 1,
    "r": "They are weak enough to be unzipped."
  },
  {
    "q": "A pairs with T using how many H-bonds?",
    "o": [
      "2",
      "3",
      "1",
      "4"
    ],
    "a": 0,
    "r": "2 Hydrogen bonds."
  },
  {
    "q": "G pairs with C using how many H-bonds?",
    "o": [
      "2",
      "3",
      "1",
      "4"
    ],
    "a": 1,
    "r": "3 Hydrogen bonds (stronger pairing)."
  },
  {
    "q": "Where does the large ribosomal subunit assemble?",
    "o": [
      "In the nucleolus",
      "In the cytoplasm",
      "In the golgi",
      "Outside the cell"
    ],
    "a": 0,
    "r": "rRNA is processed and subunits assembled in the nucleolus."
  },
  {
    "q": "What is the energy source for DNA polymerization?",
    "o": [
      "ATP hydrolysis",
      "Hydrolysis of the incoming deoxyribonucleoside triphosphate (dNTP)",
      "Light",
      "Heat"
    ],
    "a": 1,
    "r": "Release of pyrophosphate drives the reaction."
  },
  {
    "q": "Which direction does the ribosome move along the mRNA?",
    "o": [
      "3' to 5'",
      "5' to 3'",
      "Random",
      "It stays still"
    ],
    "a": 1,
    "r": "5' to 3'."
  },
  {
    "q": "What is the 'Template Strand' also known as?",
    "o": [
      "Sense strand",
      "Antisense strand",
      "Coding strand",
      "mRNA"
    ],
    "a": 1,
    "r": "Coding/Sense is non-template; Antisense is template."
  },
  {
    "q": "What is the function of miRNA (microRNA)?",
    "o": [
      "To code for proteins",
      "To regulate gene expression (degrade mRNA or block translation)",
      "To splicing",
      "To replicate"
    ],
    "a": 1,
    "r": "They are small regulatory RNAs."
  },
  {
    "q": "What is the Hayflick Limit?",
    "o": [
      "The speed of replication",
      "The number of times a normal cell can divide before senescence",
      "The size of the genome",
      "The number of genes"
    ],
    "a": 1,
    "r": "Related to telomere shortening."
  },
  {
    "q": "Which cells enter meiosis?",
    "o": [
      "Somatic cells",
      "Germ cells",
      "Liver cells",
      "Skin cells"
    ],
    "a": 1,
    "r": "To produce gametes."
  },
  {
    "q": "Is DNA replication conservative or semi-conservative?",
    "o": [
      "Conservative",
      "Semi-conservative",
      "Dispersive",
      "Random"
    ],
    "a": 1,
    "r": "Meselson-Stahl experiment proved this."
  },
  {
    "q": "Who discovered the structure of DNA?",
    "o": [
      "Watson, Crick, Franklin, Wilkins",
      "Darwin",
      "Mendel",
      "Pasteur"
    ],
    "a": 0,
    "r": "Double helix structure."
  },
  {
    "q": "What are 'housekeeping genes'?",
    "o": [
      "Genes expressed in all cells for basic functions",
      "Silent genes",
      "Genes for cleaning",
      "Viral genes"
    ],
    "a": 0,
    "r": "e.g., cytoskeleton, glycolysis enzymes."
  },
  {
    "q": "What is the Shine-Dalgarno sequence?",
    "o": [
      "Eukaryotic promoter",
      "Bacterial ribosome binding site on mRNA",
      "Stop codon",
      "Enhancer"
    ],
    "a": 1,
    "r": "It aligns the ribosome in prokaryotes."
  },
  {
    "q": "What is the Kozak sequence?",
    "o": [
      "Eukaryotic translation initiation sequence",
      "Bacterial promoter",
      "Terminator",
      "Origin"
    ],
    "a": 0,
    "r": "Helps ribosome find start AUG in eukaryotes."
  },
  {
    "q": "Does DNA polymerase have helicase activity?",
    "o": [
      "Yes",
      "No",
      "Sometimes",
      "Only in viruses"
    ],
    "a": 1,
    "r": "It requires a separate helicase enzyme."
  },
  {
    "q": "What happens if Primase is defective?",
    "o": [
      "Replication cannot initiate",
      "Replication is fast",
      "Replication is perfect",
      "Transcription fails"
    ],
    "a": 0,
    "r": "Primers are essential for polymerase to start."
  },
  {
    "q": "What is the primary product of transcription of a protein-coding gene?",
    "o": [
      "Protein",
      "mRNA (or pre-mRNA)",
      "tRNA",
      "rRNA"
    ],
    "a": 1,
    "r": "mRNA carries the message."
  }
];