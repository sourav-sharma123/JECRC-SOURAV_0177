using System.ComponentModel.DataAnnotations;

namespace AirpodsAPI.Models.Attributes
{
    public class PriceRangeAttribute : ValidationAttribute
    {
        private readonly decimal _min;
        private readonly decimal _max;

        public PriceRangeAttribute(double min, double max)
        {
            _min = (decimal)min;
            _max = (decimal)max;
        }

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is decimal price)
            {
                if (price < _min || price > _max)
                {
                    return new ValidationResult($"Price must be between {_min} and {_max}");
                }
            }

            return ValidationResult.Success;
        }
    }
}