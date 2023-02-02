using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices;

namespace backend_api.Model
{
    public class User
    {
        [Key]
       public Guid Id { get; set; }

        [Required(ErrorMessage ="Name is Required!")]
        public string Name { get; set; }


        [Required(ErrorMessage = "Email is Required!")]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                            @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                            @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
                            ErrorMessage = "Email is not valid")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Phone is Required!")]
        [RegularExpression(@"^\d{10}$")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Topic is Required!")]
        public string Topic { get; set; }

        [Required(ErrorMessage = "TimePreference is Required!")]
        public string TimePreference { get; set; }

        [NotMapped]
       public bool Subscription { get; set; }
              

    }
}
