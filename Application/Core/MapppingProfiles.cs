
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MapppingProfiles : Profile
    {
        public MapppingProfiles()
        {
            CreateMap<Activity, Activity>();
        }
    }
}