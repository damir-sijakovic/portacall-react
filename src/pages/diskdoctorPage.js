import Header from "./../comps/header/header";
import Footer from "./../comps/footer/footer";
import FooterLogo from "./../comps/footerLogo/footerLogo";
import Slider from "./../comps/slider/slider";

const DiskdoctorPage = () => {
  return (
    <>
      <Header />
      <Slider />

      <div className="container">
        <br />
        <div className="card is-shadowed">
          <img src="./assets/img/diskdoctor.png" />
          <div className="has-size-7 has-weight-black has-mb-4 project-title">
            ArSFSDoctor.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          What is ArSFSDoctor ?
        </div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            I started working on sfsrecovery tool since 2019 just after losing
            my hard disk. Goal is to make it look and feel like original
            SFSDoctor and run on AROS to recover lost/deleted/lost and corrupted
            sfs disk/partitions. Look and Feel it's not same as SFSDoctor yet
            but i am happy with the current design of arSFSDoctor.
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Build </div>
        <div className="card is-shadowed">
          <div className="has-text-dark is-semitransparent">
            What used and who helped during the build.
          </div>

          <div className="divider"></div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Some sourcecode from ASFS linux driver are used.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Functions from sfscheck.c from aros tree.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>libdiskio/ by Fredrik Wikstrom - fredrik@a500.org</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Btree build - by Krzysztof Smiechowicz - deadwood@wp.pl</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Some functions are taken from opensource testdisk.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              serk118 classNamees/mui/zune designe and rest of the implemention
              Serk118 - serk118@gmail.com
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              I like to thank John Hendrikx for all the helps/sample codes and
              directions, John Hendrikx - hjohn@xs4all.nl
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>LunaPaint used for icon.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Arzip to archiive.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Txt2Pdf for PDF.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>GCC compiler.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>JanoEditor.</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">
          Buttons and functions
        </div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>About - Displays about window.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>
              Chack Disk - same way how sfscheck works on AROS (Need bit more
              work).
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>
              Scan Disk  - scans for lost/damaged/croupted and deleted
              files/folders.
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Scan Options - recover and scan methods.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>
              Quick Scan - Basic valid unbroken structure/admin/container data
              scan.
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>
              Standard Scan - slighly faster than Deep Scan and yet again
              effective results.
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Deep Scan - slow but very effective results.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Listview - shows all the files.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>
              Select All/Undo Selected - sellect/unselect all files/folders.
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Mark/unmark - Marks and unmark selected files/folders</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Save Log -- saves log file to selected path.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Clear Log -- clears the log.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>
              Clone Drive -- clones selected partition drive to image file.
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>
              Clone Drive - generates a temporary TSFS mount file to same
              directory/device where image file is copy the mount file to
              devs/dosdrives/ and than you should be able to  mount image file
              by using system/DiskImageGUI.
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Return to Main -- back to main screen.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-chevron-right has-text-primary has-pr-2"></i>
            <span>Quit -- exit to AROS dos...</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Future plans</div>
        <div className="card is-shadowed">
          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Langauge -- Catalogs(%1 done).</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              Advance scan (scan from=xx till=xx , within available partition
              size range)(%10 done).
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Work on UI.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Image scan only.</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Repair partition (%60 done).</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Load/save log file(%20 done).</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Load/save partition metedata(%30 done).</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Sfs structure repair (%10 done).</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Sfs2 implemention(%0 done).</span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>
              Optimise read and write methods to gain more speed(direct i/o and
              cache i/o)(%10 done).
            </span>
          </div>

          <div className="has-mb-2 is-flex has-items-start">
            <i className="si-check has-text-primary has-pr-2"></i>
            <span>Clean readme guide in pdf (%5 done).</span>
          </div>
        </div>

        <div className="title is-4 has-weight-black has-mb-1">Screenshots</div>
        <div className="has-mt-1 image-container">
          <img src="./assets/img/arSFSDoctor_main.jpg" />
        </div>
        <br />
        <div className="has-mt-1 image-container">
          <img src="./assets/img/arSFSDoctor_config.jpg" />
        </div>
      </div>

      <Footer />
      <FooterLogo />
    </>
  );
};

export default DiskdoctorPage;
