const masterBank = [
{
    "q": "What is the primary function of the cell cycle?",
    "o": [
      "To produce energy for the cell",
      "To duplicate DNA and divide into two genetically identical daughter cells",
      "To create variability through mutation",
      "To synthesize lipids"
    ],
    "a": 1,
    "r": "The cell cycle ensures DNA duplication and division into identical daughter cells."
  },
  {
    "q": "Which phase of the cell cycle involves DNA replication?",
    "o": [
      "G1",
      "S phase",
      "G2",
      "M phase"
    ],
    "a": 1,
    "r": "S phase (Synthesis) is when DNA replication occurs."
  },
  {
    "q": "What constitutes 'Interphase' in the eukaryotic cell cycle?",
    "o": [
      "M phase and G1",
      "G1, S, and G2 phases",
      "Prophase and Metaphase",
      "Telophase and Cytokinesis"
    ],
    "a": 1,
    "r": "Interphase comprises G1, S, and G2 phases."
  },
  {
    "q": "What is the Gap 1 (G1) phase?",
    "o": [
      "The interval between M phase and S phase",
      "The interval between S phase and M phase",
      "The phase of mitosis",
      "The phase of cell death"
    ],
    "a": 0,
    "r": "G1 is the gap between the end of M phase and the start of S phase."
  },
  {
    "q": "What occurs during the G2 phase?",
    "o": [
      "DNA replication",
      "Preparation for mitosis and growth",
      "Chromosome segregation",
      "Cytokinesis"
    ],
    "a": 1,
    "r": "G2 allows the cell to grow and check conditions before entering mitosis."
  },
  {
    "q": "What is the approximate duration of S phase in a typical mammalian cell with a 24-hour cycle?",
    "o": [
      "1 hour",
      "10-12 hours",
      "30 minutes",
      "23 hours"
    ],
    "a": 1,
    "r": "S phase occupies about 10-12 hours (roughly half) of the cycle."
  },
  {
    "q": "What is the 'Restriction Point' (or Start in yeast)?",
    "o": [
      "The point where cells commit to DNA replication",
      "The end of Mitosis",
      "The beginning of Cytokinesis",
      "The point where chromosomes condense"
    ],
    "a": 0,
    "r": "After passing the restriction point in G1, cells are committed to divide."
  },
  {
    "q": "What is G0?",
    "o": [
      "A phase of rapid division",
      "A specialized resting state where cells delay or stop division",
      "The phase of DNA synthesis",
      "A type of cell death"
    ],
    "a": 1,
    "r": "G0 is a resting state where cells can remain for long periods if conditions are unfavorable."
  },
  {
    "q": "Which process divides the cytoplasm into two daughter cells?",
    "o": [
      "Mitosis",
      "Cytokinesis",
      "Replication",
      "Transcription"
    ],
    "a": 1,
    "r": "Cytokinesis is the division of the cytoplasm."
  },
  {
    "q": "What are the two major parts of M phase?",
    "o": [
      "G1 and G2",
      "Mitosis and Cytokinesis",
      "Prophase and S phase",
      "Interphase and M phase"
    ],
    "a": 1,
    "r": "M phase consists of nuclear division (mitosis) and cytoplasmic division (cytokinesis)."
  },
  {
    "q": "What happens during Prophase?",
    "o": [
      "Chromosomes decondense",
      "Chromatin condenses into chromosomes and the spindle begins to form",
      "Chromosomes align at the equator",
      "Sister chromatids separate"
    ],
    "a": 1,
    "r": "In Prophase, chromatin condenses and the mitotic spindle begins to assemble."
  },
  {
    "q": "What is a Kinetochore?",
    "o": [
      "A protein complex at the centromere for spindle attachment",
      "A type of microtubule motor",
      "A part of the nuclear envelope",
      "A DNA replication enzyme"
    ],
    "a": 0,
    "r": "The kinetochore is the attachment site for spindle microtubules on the centromere."
  },
  {
    "q": "What defines Prometaphase?",
    "o": [
      "Reformation of the nuclear envelope",
      "Breakdown of the nuclear envelope and spindle attachment to chromosomes",
      "Alignment of chromosomes",
      "DNA synthesis"
    ],
    "a": 1,
    "r": "Prometaphase is marked by nuclear envelope breakdown and microtubule attachment."
  },
  {
    "q": "What is the Metaphase Plate?",
    "o": [
      "A physical barrier in the cell",
      "The imaginary plane where chromosomes align at the equator",
      "The site of ribosome synthesis",
      "The new cell wall in plants"
    ],
    "a": 1,
    "r": "Chromosomes align at the metaphase plate (equator) during Metaphase."
  },
  {
    "q": "What triggers the transition to Anaphase?",
    "o": [
      "Condensation of chromosomes",
      "Cleavage of cohesin proteins holding sister chromatids together",
      "Reformation of the nucleus",
      "Synthesis of Cyclin"
    ],
    "a": 1,
    "r": "Cohesin cleavage allows sister chromatids to separate."
  },
  {
    "q": "What happens during Telophase?",
    "o": [
      "Chromosomes condense further",
      "Nuclear envelopes re-form and chromosomes decondense",
      "Spindle fibers pull chromatids apart",
      "DNA is replicated"
    ],
    "a": 1,
    "r": "Telophase involves the reformation of the nucleus and decondensation of chromosomes."
  },
  {
    "q": "What cytoskeletal structure drives Cytokinesis in animal cells?",
    "o": [
      "The Mitotic Spindle",
      "The Contractile Ring (Actin and Myosin)",
      "Intermediate Filaments",
      "The Cell Wall"
    ],
    "a": 1,
    "r": "The contractile ring of actin and myosin pinches the cell in two."
  },
  {
    "q": "Which cytoskeletal elements form the Mitotic Spindle?",
    "o": [
      "Actin filaments",
      "Microtubules",
      "Intermediate filaments",
      "Collagen fibers"
    ],
    "a": 1,
    "r": "The mitotic spindle is composed of microtubules."
  },
  {
    "q": "What are Sister Chromatids?",
    "o": [
      "Homologous chromosomes",
      "Two identical copies of a chromosome held together after replication",
      "Different chromosomes in the same cell",
      "Daughter cells"
    ],
    "a": 1,
    "r": "Sister chromatids are the identical products of DNA replication linked at the centromere."
  },
  {
    "q": "What is the role of the Centrosome?",
    "o": [
      "To synthesize DNA",
      "To organize microtubules and form the spindle poles",
      "To hold sister chromatids together",
      "To degrade proteins"
    ],
    "a": 1,
    "r": "The centrosome is the Microtubule Organizing Center (MTOC) that forms spindle poles."
  },
  {
    "q": "When does Centrosome duplication occur?",
    "o": [
      "During Mitosis",
      "triggered by the same Cdk as DNA replication (start of S phase)",
      "During G1",
      "During Cytokinesis"
    ],
    "a": 1,
    "r": "Centrosome duplication is coordinated with DNA replication."
  },
  {
    "q": "What are 'Aster' microtubules?",
    "o": [
      "Microtubules that attach to kinetochores",
      "Microtubules that cross the cell to the other pole",
      "Microtubules that radiate outward to anchor the spindle to the cell cortex",
      "Microtubules inside the nucleus"
    ],
    "a": 2,
    "r": "Astral microtubules anchor the spindle poles to the cell cortex."
  },
  {
    "q": "What are 'Interpolar' microtubules?",
    "o": [
      "They stabilize the spindle by interacting with microtubules from the opposite pole",
      "They attach to chromosomes",
      "They form the nuclear envelope",
      "They contract the cell"
    ],
    "a": 0,
    "r": "Interpolar microtubules overlap and stabilize the spindle structure."
  },
  {
    "q": "Which motor proteins are involved in Anaphase B spindle elongation?",
    "o": [
      "Myosin",
      "Kinesin (sliding) and Dynein (pulling)",
      "Actin",
      "Cohesin"
    ],
    "a": 1,
    "r": "Kinesins slide interpolar microtubules, and Dyneins pull astral microtubules."
  },
  {
    "q": "What is 'Anaphase A'?",
    "o": [
      "Movement of poles apart",
      "Movement of chromosomes toward the poles (shortening of kinetochore microtubules)",
      "breakdown of the nuclear envelope",
      "Reformation of the nucleus"
    ],
    "a": 1,
    "r": "Anaphase A is the movement of chromosomes to the poles via microtubule shortening."
  },
  {
    "q": "What enzyme complex triggers the separation of sister chromatids?",
    "o": [
      "DNA Polymerase",
      "The APC/C (Anaphase Promoting Complex)",
      "Rubisco",
      "ATP Synthase"
    ],
    "a": 1,
    "r": "The APC/C triggers cohesin cleavage."
  },
  {
    "q": "What drives the disassembly of the nuclear envelope?",
    "o": [
      "Phosphorylation of nuclear pore proteins and lamins",
      "Dephosphorylation of lamins",
      "DNA replication",
      "Synthesis of lipids"
    ],
    "a": 0,
    "r": "Phosphorylation causes the nuclear lamina and envelope to break down."
  },
  {
    "q": "What reverses the nuclear envelope breakdown in Telophase?",
    "o": [
      "More phosphorylation",
      "Dephosphorylation of nuclear pore proteins and lamins",
      "Degradation of lamins",
      "Apoptosis"
    ],
    "a": 1,
    "r": "Dephosphorylation allows the nuclear envelope to reassemble."
  },
  {
    "q": "How do prokaryotic cells divide?",
    "o": [
      "Mitosis",
      "Binary Fission",
      "Meiosis",
      "Budding"
    ],
    "a": 1,
    "r": "Prokaryotes divide by binary fission."
  },
  {
    "q": "What is the typical status of differentiated nerve cells regarding the cell cycle?",
    "o": [
      "They divide rapidly",
      "They stay in S phase",
      "They remain permanently in G0",
      "They cycle every 30 minutes"
    ],
    "a": 2,
    "r": "Most neurons are permanently in G0 and do not divide."
  },
  {
    "q": "What happens if a cell has unfavorable conditions at the G1 restriction point?",
    "o": [
      "It proceeds to S phase anyway",
      "It enters G0 or delays progress",
      "It dissolves",
      "It skips to M phase"
    ],
    "a": 1,
    "r": "Unfavorable conditions cause the cell to delay or enter G0."
  },
  {
    "q": "How many chromatids does a chromosome have during G2?",
    "o": [
      "One",
      "Two (Sister Chromatids)",
      "Four",
      "None"
    ],
    "a": 1,
    "r": "After S phase (including G2), each chromosome has two sister chromatids."
  },
  {
    "q": "Which structure reappears within the nucleus during Telophase?",
    "o": [
      "The Spindle",
      "The Nucleolus",
      "The Centrosome",
      "The Kinetochore"
    ],
    "a": 1,
    "r": "The nucleolus reappears as the nucleus reforms."
  },
  {
    "q": "What is the role of Cohesins?",
    "o": [
      "To pull chromosomes apart",
      "To hold sister chromatids together",
      "To form the cell membrane",
      "To synthesize DNA"
    ],
    "a": 1,
    "r": "Cohesins form rings that hold sister chromatids together."
  },
  {
    "q": "In which phase do chromosomes become visible as condensed structures?",
    "o": [
      "Interphase",
      "Prophase",
      "Telophase",
      "G1"
    ],
    "a": 1,
    "r": "Chromosomes condense and become visible in Prophase."
  },
  {
    "q": "What determines the plane of cytoplasmic division?",
    "o": [
      "The position of the nucleus",
      "The position of the spindle",
      "Random chance",
      "The mitochondria"
    ],
    "a": 1,
    "r": "The spindle position determines where the contractile ring forms."
  },
  {
    "q": "What distinguishes plant cell cytokinesis from animal cell cytokinesis?",
    "o": [
      "Plants use a contractile ring",
      "Plants form a Cell Plate (Phragmoplast)",
      "Plants do not divide",
      "Plants use binary fission"
    ],
    "a": 1,
    "r": "Plant cells build a new cell wall (cell plate) instead of pinching off."
  },
  {
    "q": "What is the function of the 'Catastrophins' (kinesin-like proteins) during Anaphase A?",
    "o": [
      "To stabilize microtubules",
      "To remove tubulin subunits and shorten kinetochore microtubules",
      "To synthesize tubulin",
      "To bond chromosomes"
    ],
    "a": 1,
    "r": "Catastrophins promote depolymerization (shortening) of microtubules."
  },
  {
    "q": "Usually, how long does M phase take in a mammalian cell?",
    "o": [
      "12 hours",
      "Less than 1 hour",
      "24 hours",
      "1 week"
    ],
    "a": 1,
    "r": "M phase is short, typically less than 1 hour."
  },
  {
    "q": "Which protein complex degrades Cohesin?",
    "o": [
      "Separase",
      "Cyclin",
      "Cdk",
      "Myosin"
    ],
    "a": 0,
    "r": "Separase (activated by APC/C) cleaves Cohesin."
  },
  {
    "q": "What is the 'Start' point in yeast equivalent to in mammalian cells?",
    "o": [
      "Restriction Point",
      "Metaphase Plate",
      "Telomere",
      "Centromere"
    ],
    "a": 0,
    "r": "Start (yeast) and Restriction Point (mammals) are the G1 commitment points."
  },
  {
    "q": "True or False: Cell growth (increase in mass) stops completely during Interphase.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "r": "False. Cell growth occurs throughout the cycle (G1, S, G2), only pausing in M phase."
  },
  {
    "q": "What happens to the Centrioles during Prophase?",
    "o": [
      "They disappear",
      "They move toward opposite poles",
      "They form the nuclear envelope",
      "They attach to DNA"
    ],
    "a": 1,
    "r": "The centrosomes (containing centrioles) migrate to opposite poles."
  },
  {
    "q": "Which microtubules attach to the chromosome?",
    "o": [
      "Astral microtubules",
      "Interpolar microtubules",
      "Kinetochore microtubules",
      "Actin filaments"
    ],
    "a": 2,
    "r": "Kinetochore microtubules attach to the kinetochore on the chromosome."
  },
  {
    "q": "In which phase do the nuclear envelope vesicles fully reassemble?",
    "o": [
      "Anaphase",
      "Metaphase",
      "Telophase",
      "Prophase"
    ],
    "a": 2,
    "r": "Reassembly occurs in Telophase."
  },
  {
    "q": "True or False: The contractile ring is a permanent structure in the cell.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "r": "False. It is a transient structure that assembles only for cytokinesis."
  },
  {
    "q": "What are 'Mesosomes' in prokaryotes?",
    "o": [
      "Mitochondria equivalents",
      "Membrane infoldings associated with DNA duplication",
      "Ribosomes",
      "Flagella"
    ],
    "a": 1,
    "r": "Mesosomes are plasmalemma associations accompanying DNA duplication in prokaryotes."
  },
  {
    "q": "During which phase does the nucleolus disappear?",
    "o": [
      "Telophase",
      "Prophase",
      "G1",
      "S phase"
    ],
    "a": 1,
    "r": "The nucleolus disappears during Prophase."
  },
  {
    "q": "What generates the force for Anaphase A?",
    "o": [
      "Microtubule growth",
      "Microtubule shortening/depolymerization at the kinetochore",
      "Actin contraction",
      "Membrane expansion"
    ],
    "a": 1,
    "r": "Force is generated by microtubule shortening at the kinetochore."
  },
  {
    "q": "What ensures that sister chromatids end up in different daughter cells?",
    "o": [
      "Random assortmen",
      "Bi-orientation (attachment to opposite poles)",
      "Gravity",
      "Diffusion"
    ],
    "a": 1,
    "r": "Bi-orientation ensures chromatids are pulled to opposite poles."
  },
{
    "q": "What is the primary goal of Meiosis?",
    "o": [
      "To produce identical daughter cells",
      "To produce haploid gametes from diploid germ cells",
      "To repair damaged DNA",
      "To grow the organism"
    ],
    "a": 1,
    "r": "Meiosis reduces chromosome number by half to produce gametes."
  },
  {
    "q": "How many sets of chromosomes do haploid (n) cells contain?",
    "o": [
      "One set",
      "Two sets",
      "Three sets",
      "Four sets"
    ],
    "a": 0,
    "r": "Haploid cells, like gametes, contain one single set of chromosomes."
  },
  {
    "q": "Which theory of reproduction suggested a 'homunculus' existed inside sperm?",
    "o": [
      "Epigenesis",
      "Preformationism",
      "Natural Selection",
      "Cell Theory"
    ],
    "a": 1,
    "r": "Preformationism held that a fully formed miniature human existed in the sperm."
  },
  {
    "q": "What is a major advantage of sexual reproduction?",
    "o": [
      "It is faster than asexual reproduction",
      "It requires less energy",
      "It increases genetic diversity and adaptability",
      "It produces clones"
    ],
    "a": 2,
    "r": "Genetic diversity enhances survival in changing environments."
  },
  {
    "q": "Which process involves the fusion of two haploid gametes?",
    "o": [
      "Meiosis",
      "Mitosis",
      "Fertilization",
      "Binary Fission"
    ],
    "a": 2,
    "r": "Fertilization restores the diploid state by fusing gametes."
  },
  {
    "q": "What is the result of Meiosis I?",
    "o": [
      "2 diploid cells",
      "2 haploid cells (reductional division)",
      "4 haploid cells",
      "1 zygote"
    ],
    "a": 1,
    "r": "Meiosis I reduces the chromosome number from 2n to n."
  },
  {
    "q": "What happens during 'Synapsis' in Prophase I?",
    "o": [
      "Chromosomes separate",
      "Homologous chromosomes pair up",
      "DNA is replicated",
      "The nuclear envelope forms"
    ],
    "a": 1,
    "r": "Synapsis is the pairing of homologous chromosomes."
  },
  {
    "q": "What structure forms between homologous chromosomes to promote crossing-over?",
    "o": [
      "The Mitotic Spindle",
      "The Synaptonemal Complex",
      "The Cell Plate",
      "The Centrosome"
    ],
    "a": 1,
    "r": "The synaptonemal complex mediates homologous pairing and recombination."
  },
  {
    "q": "In which substage of Prophase I does Crossing Over occur?",
    "o": [
      "Leptotene",
      "Zygotene",
      "Pachytene",
      "Diakinesis"
    ],
    "a": 2,
    "r": "Crossing over occurs during Pachytene."
  },
  {
    "q": "What is a 'chiasma' (plural: chiasmata)?",
    "o": [
      "A type of cell",
      "The point where non-sister chromatids have exchanged genetic material",
      "The spindle pole",
      "A gene locus"
    ],
    "a": 1,
    "r": "Chiasmata are the visible sites of prior crossing over events."
  },
  {
    "q": "What occurs during Zygotene?",
    "o": [
      "Chromosomes decondense",
      "Homologous chromosomes begin to pair (synapsis)",
      "Crossing over finishes",
      "Sister chromatids separate"
    ],
    "a": 1,
    "r": "Zygotene is characterized by the initiation of synapsis."
  },
  {
    "q": "True or False: There is a DNA replication phase between Meiosis I and Meiosis II.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "r": "False. Interkinesis lacks an S phase (no DNA duplication)."
  },
  {
    "q": "What separates during Anaphase I?",
    "o": [
      "Sister chromatids",
      "Homologous chromosomes",
      "Centrosomes",
      "Nuclei"
    ],
    "a": 1,
    "r": "Homologous chromosomes separate in Anaphase I (sister chromatids stay together)."
  },
  {
    "q": "What separates during Anaphase II?",
    "o": [
      "Homologous chromosomes",
      "Sister chromatids",
      "Tetrads",
      "Daughter cells"
    ],
    "a": 1,
    "r": "Sister chromatids separates in Anaphase II (similar to mitosis)."
  },
  {
    "q": "How many functional sperm cells are typically produced from one primary spermatocyte?",
    "o": [
      "1",
      "2",
      "4",
      "8"
    ],
    "a": 2,
    "r": "Meiosis produces 4 haploid spermatids from one diploid spermatocyte."
  },
  {
    "q": "What is 'Independent Assortment'?",
    "o": [
      "The random mixing of maternal and paternal chromosomes into gametes",
      "The fusion of egg and sperm",
      "The replication of DNA",
      "The repair of genes"
    ],
    "a": 0,
    "r": "Homologous pairs align randomly at Metaphase I, creating diverse combinations."
  },
  {
    "q": "Approximately how many different combinations of chromosomes sort into gametes in humans (2n=46)?",
    "o": [
      "2^23 (about 8 million)",
      "2^46",
      "23",
      "46"
    ],
    "a": 0,
    "r": "2^n combinations, where n=23, yields ~8 million."
  },
  {
    "q": "What is a 'Karyotype'?",
    "o": [
      "A type of gamete",
      "The complete set of chromosomes displayed by size and shape",
      "A genetic disease",
      "The cell cycle"
    ],
    "a": 1,
    "r": "A karyotype visualizes the chromosomal complement of a cell."
  },
  {
    "q": "What are 'Homologous Chromosomes'?",
    "o": [
      "Identical copies produced by replication",
      "Chromosome pairs (one from each parent) with the same genes but potentially different alleles",
      "Chromosomes from different species",
      "Sex chromosomes only"
    ],
    "a": 1,
    "r": "Homologs carry the same gene loci but are not identical."
  },
  {
    "q": "What is a 'Locus'?",
    "o": [
      "A type of insect",
      "The specific physical location of a gene on a chromosome",
      "The center of the cell",
      "A protein complex"
    ],
    "a": 1,
    "r": "Locus refers to a gene's position on the chromosome."
  },
  {
    "q": "True or False: Asexual reproduction produces genetically unique offspring.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "r": "False. Asexual reproduction produces clones (genetically identical)."
  },
  {
    "q": "Which form of asexual reproduction involves the organism splitting into pieces that grow into new individuals?",
    "o": [
      "Binary Fission",
      "Budding",
      "Fragmentation",
      "Conjugation"
    ],
    "a": 2,
    "r": "Fragmentation allows new individuals to regrow from parts."
  },
  {
    "q": "What is bacterial 'Conjugation'?",
    "o": [
      "Sexual reproduction with gametes",
      "Transfer of plasmid DNA via direct contact (pilus)",
      "Uptake of free DNA",
      "Viral transfer of DNA"
    ],
    "a": 1,
    "r": "Conjugation is plasmid transfer between bacteria."
  },
  {
    "q": "Which bacterial process involves DNA transfer by a bacteriophage/virus?",
    "o": [
      "Transformation",
      "Transduction",
      "Conjugation",
      "Replication"
    ],
    "a": 1,
    "r": "Transduction is viral-mediated DNA transfer."
  },
  {
    "q": "What is specialized about the 'germ-line' cells?",
    "o": [
      "They form the body tissues",
      "They are the only cells that undergo meiosis to produce gametes",
      "They have no DNA",
      "They divide only by mitosis"
    ],
    "a": 1,
    "r": "Germ-line cells are set aside to produce the next generation via gametes."
  },
  {
    "q": "What is the diploid number (2n) for humans?",
    "o": [
      "23",
      "46",
      "92",
      "12"
    ],
    "a": 1,
    "r": "Humans have 46 chromosomes (23 pairs)."
  },
  {
    "q": "What is the haploid number (n) for humans?",
    "o": [
      "23",
      "46",
      "1",
      "100"
    ],
    "a": 0,
    "r": "Gametes have 23 chromosomes."
  },
  {
    "q": "During Leptotene of Prophase I, chromosomes:",
    "o": [
      "Disappear",
      "Begin to condense and become visible",
      "Line up at the equator",
      "Separate"
    ],
    "a": 1,
    "r": "Leptotene is the 'thin thread' stage where condensation begins."
  },
  {
    "q": "The 'bivalent' or 'tetrad' consists of:",
    "o": [
      "2 chromatids",
      "4 chromatids (2 homologous chromosomes paired)",
      "8 chromatids",
      "1 chromosome"
    ],
    "a": 1,
    "r": "A bivalent is a pair of homologous chromosomes, totaling 4 chromatids."
  },
  {
    "q": "What marks the Diplotene stage?",
    "o": [
      "Synaptonemal complex dissolves; homologs separate but remain held at chiasmata",
      "Maximum condensation",
      "Spindle formation",
      "Nuclear envelope breakdown"
    ],
    "a": 0,
    "r": "Homologs try to separate but are held by chiasmata."
  },
  {
    "q": "What happens during Diakinesis?",
    "o": [
      "Chromosomes decondense",
      "Maximal condensation, nuclear envelope breaks down, spindle forms",
      "Crossing over begins",
      "DNA synthesis"
    ],
    "a": 1,
    "r": "Diakinesis is the final stage of Prophase I."
  },
  {
    "q": "In Metaphase I, how do chromosomes align?",
    "o": [
      "Individually at the equator",
      "As homologous pairs (bivalents) at the equator",
      "At the poles",
      "Randomly"
    ],
    "a": 1,
    "r": "Homologous pairs align at the metaphase plate."
  },
  {
    "q": "Are the daughter cells of Meiosis I diploid or haploid?",
    "o": [
      "Diploid",
      "Haploid",
      "Triploid",
      "None"
    ],
    "a": 1,
    "r": "They are haploid (n) but chromosomes still have 2 chromatids."
  },
  {
    "q": "Does crossing over occur in Prophase II?",
    "o": [
      "Yes",
      "No"
    ],
    "a": 1,
    "r": "No, crossing over is unique to Prophase I."
  },
  {
    "q": "What is the function of 'recombination nodules'?",
    "o": [
      "To synthesize protein",
      "To catalyze crossing over during Pachytene",
      "To destroy DNA",
      "To move chromosomes"
    ],
    "a": 1,
    "r": "They contain enzymes that facilitate DNA exchange."
  },
  {
    "q": "What is a 'Holliday Junction'?",
    "o": [
      "A holiday destination",
      "A cross-strand structure formed during DNA recombination",
      "A type of cell junction",
      "The connection between spindle poles"
    ],
    "a": 1,
    "r": "It is an intermediate structure in genetic recombination."
  },
  {
    "q": "What happens to the Centromere Cohesins during Anaphase I?",
    "o": [
      "They are degraded",
      "They remain intact (protected)",
      "They dissolve",
      "They dissociate"
    ],
    "a": 1,
    "r": "Centromeric cohesin is protected in Anaphase I to keep sister chromatids together."
  },
  {
    "q": "When ARE the centromere cohesins finally degraded?",
    "o": [
      "Metaphase I",
      "Anaphase I",
      "Anaphase II",
      "Telophase I"
    ],
    "a": 2,
    "r": "They are cleaved in Anaphase II to allow sister chromatid separation."
  },
  {
    "q": "Which division is called 'Equational'?",
    "o": [
      "Meiosis I",
      "Meiosis II",
      "Interphase",
      "G1"
    ],
    "a": 1,
    "r": "Meiosis II is equational (n -> n), similar to mitosis."
  },
  {
    "q": "Which division is called 'Reductional'?",
    "o": [
      "Meiosis I",
      "Meiosis II",
      "Mitosis",
      "Cytokinesis"
    ],
    "a": 0,
    "r": "Meiosis I reduces ploidy (2n -> n)."
  },
  {
    "q": "How many crossover events typically occur per chromosome pair in humans?",
    "o": [
      "None",
      "2-3",
      "100",
      "50"
    ],
    "a": 1,
    "r": "On average, 2-3 crossovers occur per bivalent."
  },
  {
    "q": "What is unique about the kinetochore attachment in Metaphase I?",
    "o": [
      "Each sister chromatid attaches to opposite poles",
      "Sister kinetochores behave as a unit and attach to the SAME pole",
      "They do not attach",
      "They attach to the cell membrane"
    ],
    "a": 1,
    "r": "Sister kinetochores attach mono-orientally to pull the whole chromosome to one pole."
  },
  {
    "q": "What is 'Disjunction'?",
    "o": [
      "The fusion of cells",
      "The separation of chromosomes/chromatids during Anaphase",
      "The breakdown of the nucleus",
      "The synthesis of DNA"
    ],
    "a": 1,
    "r": "Disjunction is the pulling apart of genetic material."
  },
  {
    "q": "What is the final product of meiosis in females?",
    "o": [
      "4 equal sperm cells",
      "1 functional ovum (egg) and 2-3 polar bodies",
      "2 diploid cells",
      "A zygote"
    ],
    "a": 1,
    "r": "Oogenesis produces one large egg and small polar bodies."
  },
  {
    "q": "What drives the high genetic variability in sexual reproduction?",
    "o": [
      "Mutation only",
      "Crossing over, Independent Assortment, and Random Fertilization",
      "Mitosis",
      "Cloning"
    ],
    "a": 1,
    "r": "The combination of these three factors creates vast diversity."
  },
  {
    "q": "What is 'Transformation' in bacteria?",
    "o": [
      "Uptake of naked DNA from the environment",
      "Viral transfer",
      "Mating",
      "Division"
    ],
    "a": 0,
    "r": "Transformation is the uptake of environmental DNA."
  },
  {
    "q": "Why is Meiosis II essential?",
    "o": [
      "To reduce the chromosome number again",
      "To separate the sister chromatids and ensure haploid cells have single-chromatid chromosomes",
      "To replicate DNA",
      "To fuse cells"
    ],
    "a": 1,
    "r": "It separates the sister chromatids produced in the original S phase."
  },
  {
    "q": "What is the result of 'Random Fertilization'?",
    "o": [
      "It limits diversity",
      "It multiplies the diversity from meiosis (sperm combinations x egg combinations)",
      "It clones the parent",
      "It repairs DNA"
    ],
    "a": 1,
    "r": "It creates trillions of potential zygote combinations."
  },
  {
    "q": "True or False: Homologous chromosomes align independently of one another during Metaphase I.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "r": "False. They align AS PAIRS."
  },
  {
    "q": "True or False: Different chromosome pairs align independently of one another during Metaphase I.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "r": "True. The orientation of one pair doesn't affect another (Independent Assortment)."
  }
];