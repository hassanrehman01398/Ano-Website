import React from "react";
import Typography from "@material-ui/core/Typography";
import cx from "classnames";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "20px",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  dis: {
    fontWeight: "600",
  },

  card: {
    backgroundColor: "black",
    color: "#fff",
  },
  media: {
    height: 140,
    color: "#fff",
  },
});

export default function Terms() {
  const classes = useStyles();
  return (
    <div>
      <Card className={cx(classes.root, classes.card)} variant="outlined">
        <CardContent>
          <Typography
            variant="h3"
            style={{ fontWeight: "500", color: "#FCA311" }}
            gutterBottom
          >
            <center>Terms and Conditions</center>
          </Typography>
          <div></div>

          <Typography variant="body1">
            THE TERMS OF USE (“TERMS”) AND PRIVACY POLICY GOVERN YOUR ACCESS TO
            AND USE OF OUR SERVICES. BY USING THE SERVICES YOU AGREE TO BE BOUND
            BY THESE TERMS. WE HAVE KEPT THE TERMS AND CONDITIONS SIMPLE FOR YOU
            TO QUICKLY GO THROUGH THE SAME AND ACCESS THE WEBSITE ACCORDINLGY AS
            YOUR ACCESS OF THE WEBSITE WOULD MAKE YOU BOUND BY THESE TERMS AND
            ALL APPLICABLE LAWS.
            <br />
            <br />
          </Typography>

          <Typography variant="h5" style={{ color: "#FCA311" }} gutterBottom>
            1) Our Aim and Objective
          </Typography>
          <Typography variant="body1">
            Our aim and objective are provided in the about us section. We
            accordingly want all the Users (hereinafter ‘You’) to use the
            Website in consonance and adhere to these terms. In line with the
            objective, would not store any of your information nor do we need
            you to provide any of your personal information. Hence we do not
            have the provision of creating your login ID! In order to keep this
            place clean, we also do not allow the users to reply to any post,
            engage in to any unnecessary discussion and spread mud. Just your
            thoughts.
            <br />
            <br />
          </Typography>
          <Typography variant="h5" style={{ color: "#FCA311" }} gutterBottom>
            2) Your Declaration
          </Typography>
          <Typography variant="body1">
            Before accessing the Website, You declare that e following as a
            condition precedent that you have attained the minimum age of 18
            years or such age as required under the laws of your respective
            country and that you shall always access the Website in a prudent
            manner.
            <br />
            <br />
          </Typography>
          <Typography variant="h5" style={{ color: "#FCA311" }} gutterBottom>
            3) Your Content
          </Typography>
          <Typography variant="body1">
            We allow you to post your Content on the Website/Platform which may
            include texts, photos, audio, videos, links, and files to share with
            the viewers. All such materials, contents & post that you upload,
            publish or display to others on our Platform (hereinafter
            collectively referred to as “Content”). You acknowledge and agree
            that, as part of using the Platform, Your Content will be viewed by
            the general public.
            <br />
            <br />
            You expressly agree and consent that the Content you post are
            derived from your own sources and you have all right including but
            not limited to Intellectual Property Rights (IPR), ownership,
            consent, approvals & license to post these Content and further
            agreed that by posting this contents, you are not violating third
            party/parties rights, IPR and /or interest directly or indirectly.
            You further undertake that Your Content does not contain any
            libelous, indecent, pornographic or obscene or similar material nor
            does the same disclose any private or personal information regarding
            any person.
            <br />
            <br />
          </Typography>
          <Typography variant="h5" style={{ color: "#FCA311" }} gutterBottom>
            4) Our Rights
          </Typography>
          <Typography variant="body1">
            By posting your Content, You give us a non-exclusive, worldwide,
            royalty-free, license to publish it on our Website or otherwise in
            consideration of our granting you the access to and use the Website.
            You agree that we may have all the rights to use your Content in any
            manner whatsoever including but not limited to displaying the same
            in relation to any advertisement, to promote our platform, and use,
            copy, reproduce, adapt, modify, create derivative works from,
            publish, transmit, display, and distribute, translate, communicate
            and make available to the public Your Content. We have no obligation
            but have every right to remove / delete your Content without any
            notice to you, if we, in our sole and considered opinion, believe
            that the same is in violation to these terms and/or any applicable
            law(s). However continuance of any post on our Website shall not
            amount to any failure of whatsoever nature on our part and you shall
            continue to be solely responsible for your Content and shall
            indemnify us against any issue arising out of the same.
            <br />
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
