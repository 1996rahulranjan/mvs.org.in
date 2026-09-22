async function generateCard(){

    const response = await fetch("generate_id.php");
    const data = await response.json();

    const membershipID = data.membership_id;

    document.getElementById("cardStudentId").innerText = membershipID;
    document.getElementById("barcodeText").innerText = membershipID;

    document.getElementById("cardName").innerText =
    document.getElementById("name").value;

    document.getElementById("cardFaculty").innerText =
    document.getElementById("faculty").value;

    document.getElementById("cardMembership").innerText =
    document.getElementById("membership").value;

    document.getElementById("cardValidity").innerText =
    document.getElementById("validity").value;

    let file = document.getElementById("photo").files[0];

    if(file){

        let reader = new FileReader();

        reader.onload = function(e){

            document.getElementById("previewPhoto").src =
            e.target.result;

        }

        reader.readAsDataURL(file);

    }

}