$(document).ready(function () {
    $("#ticketBookingForm").validate({
        rules: {
            name: {
                required: true,
                regex: /^[a-zA-Z\s]+$/
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                regex: /^03\d{9}$/
            },
            opportunity: {
                required: true
            },
            package: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your Name",
                regex: "Enter a correct name"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address",
            },
            phone: {
                required: "Please fill out this field",
                regex: "Enter a correct number"
            },
            opportunity: {
                required: "Please select any one service"
            },
            package: {
                required: "Please select any one package"
            }
        },
        errorPlacement: function (error, element) {
            var errorId = '#' + element.attr('id') + 'Error';
            $(errorId).text(error.text());
        },
        success: function (label, element) {
            var errorId = '#' + $(element).attr('id') + 'Error';
            $(errorId).text('');
        },
        submitHandler: function (form) {
            var thankYouMessage = 'Thank you!\nYour request has been submitted successfully.';
            $('#ticketBookModal .modal-body').html('<p>' + thankYouMessage + '</p>');
            $('#ticketBookModal .modal-footer').hide();
            setTimeout(function () {
                $('#ticketBookModal').modal('hide');
                form.reset();
                location.reload();
            }, 2000);
        }

    });

    jQuery.validator.addMethod("regex", function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    }, "Please check your input.");

    $('#submitForm').on('click', function () {
        $("#ticketBookingForm").submit();
    });



    $('#subscribeForm').submit(function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[name="email"]');
        const email = emailInput.value;
        if (email) {
            const modal = new bootstrap.Modal(document.getElementById('myModal'));
            modal.show();
            $('#myModal .modal-footer button').on('click', function () {
                location.reload();
            });
        } else {
            alert('Please enter a valid email address');
        }
    });
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }

    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

$(window).on('load', function () {
    setTimeout(function () {
        $('#loader').fadeOut('slow', function () {
            $('#content').fadeIn('slow');
        });
    }, 700);
});