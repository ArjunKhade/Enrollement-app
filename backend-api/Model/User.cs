using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices;

namespace backend_api.Model
{
    public class User
    {
        [Key]
       public Guid Id { get; set; }
       public string Name { get; set; }
       public string Email { get; set; }
       public string Phone { get; set; }    
       public string Topic { get; set; }
       public string TimePreference { get; set; }

        [NotMapped]
       public bool Subscription { get; set; }
              

    }
}
